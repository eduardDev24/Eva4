import React, { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
import {
  saveComment,
  getComments,
  deleteComment,
  updateComment,
} from "./FuncionesLocalStorage";
import "../App.css";

const Comentario: React.FC = () => {
  // Estado para almacenar el correo electrónico del usuario
  const [email, setEmail] = useState<string>("");
  // Estado para almacenar el contenido del comentario
  const [content, setContent] = useState<string>("");
  // Estado para manejar los errores de validación
  const [errors, setErrors] = useState<{ email?: string; content?: string }>(
    {}
  );
  // Estado para almacenar los comentarios guardados
  const [comments, setComments] = useState<
    { email: string; content: string }[]
  >(getComments());
  // Estado para manejar el índice del comentario que se está editando
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  // Función para manejar el envío del formulario
  function handleSaveComment() {
    // Validación de los datos del formulario
    const newErrors: { email?: string; content?: string } = {};
    if (!email) {
      newErrors.email = "El correo es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "El correo no es válido";
    }
    if (!content) {
      newErrors.content = "El comentario es obligatorio";
    }
    setErrors(newErrors);

    // Si no hay errores, guardar el comentario
    if (Object.keys(newErrors).length === 0) {
      if (editingIndex !== null) {
        // Si estamos editando, actualizamos el comentario existente
        updateComment(editingIndex, { email, content });
        setEditingIndex(null);
      } else {
        // Si no estamos editando, guardamos un nuevo comentario
        saveComment({ email, content });
      }
      setComments(getComments());
      setEmail("");
      setContent("");
    }
  }

  // Función para manejar la edición de un comentario
  function handleEditComment(index: number) {
    const comment = comments[index];
    setEmail(comment.email);
    setContent(comment.content);
    setEditingIndex(index);
  }

  // Función para manejar la eliminación de un comentario
  function handleDeleteComment(index: number) {
    deleteComment(index);
    setComments(getComments());
  }

  return (
      <div className="div-contenedor">
        <div className="div-formulario">
        <Form>
          <h2 className="text-center">Deja tu comentario</h2>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Ingresa tu correo</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formContent">
            <Form.Label>Ingresa tu comentario</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              isInvalid={!!errors.content}
            />
            <Form.Control.Feedback type="invalid">
              {errors.content}
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" onClick={handleSaveComment}>
            {editingIndex !== null ? "Guardar cambios" : "Enviar"}
          </Button>
        </Form>
        </div>

        <div><h3 className="mt-2 mb-0">Comentarios</h3></div>
        <div className="div-comenentario">
        <Table hover>
        <thead>
          <tr>
            <th>Correo</th>
            <th>Comentario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment, index) => (
            <tr key={index}>
              <td>{comment.email}</td>
              <td>{comment.content}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteComment(index)}
                  className="me-2"
                >
                  Eliminar
                </Button>
                <Button
                  variant="warning"
                  onClick={() => handleEditComment(index)}
                >
                  Editar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
      </div> 
  );
};

export default Comentario;
