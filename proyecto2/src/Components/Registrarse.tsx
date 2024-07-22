import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//validaciones para el ingreso de los datos
const validateName = (name: string): string | undefined => {
  if (!name) return "El nombre es obligatorio";
  return undefined;
};

const validateEmail = (email: string): string | undefined => {
  if (!email) return "El correo es obligatorio";
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) return "El correo no es válido";
  return undefined;
};

const validatePassword = (password: string): string | undefined => {
  if (!password) return "La contraseña es obligatoria";
  if (password.length < 8)
    return "La contraseña debe tener al menos 8 caracteres";
  return undefined;
};

// Esta función se encargara de renderizar el formulario y gestionar el estado y validacion
function Registrarse() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
  }>({});
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors: { name?: string; email?: string; password?: string } = {};
    newErrors.name = validateName(name);
    newErrors.email = validateEmail(email);
    newErrors.password = validatePassword(password);

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.password) {
      // Si no hay errores, redirigira a la página de inicio
      navigate("/");
    }
  };

  return (
    <div className="div-registrarse">
      <Form onSubmit={handleSubmit}>
        <h1>Registrarse</h1>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Dirección de correo</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Button className="btn-registrarse" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
}

export default Registrarse;
