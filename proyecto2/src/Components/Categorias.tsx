import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import accion from "/src/assets/imagen_categoria.jpg";
import comedia from "/src/assets/imagen_categoria.jpg";
import documental from "/src/assets/imagen_categoria.jpg";
import drama from "/src/assets/imagen_categoria.jpg";
import fantasia from "/src/assets/imagen_categoria.jpg";
import terror from "/src/assets/imagen_categoria.jpg";
import ninos from "/src/assets/imagen_categoria.jpg";
import misterio from "/src/assets/imagen_categoria.jpg";
import romance from "/src/assets/imagen_categoria.jpg";
import ciencia from "/src/assets/imagen_categoria.jpg";

//array con las categorias, guardamos en la variable nombre y fondo
const categorias = [
  { nombre: "Acción y aventuras", fondo: accion },
  { nombre: "Comedia", fondo: comedia },
  { nombre: "Documental", fondo: documental },
  { nombre: "Drama", fondo: drama },
  { nombre: "Fantasía", fondo: fantasia },
  { nombre: "Terror", fondo: terror },
  { nombre: "Niños", fondo: ninos },
  { nombre: "Misterio y suspenso", fondo: misterio },
  { nombre: "Romance", fondo: romance },
  { nombre: "Ciencia ficción", fondo: ciencia },
];
//recorrimos array para mostrar cada imagen y categoria
const Categorias: React.FC = () => {
  return (
    <Container className="container-categoria">
      <h1 className="text-white mt-4">Categorías</h1>

      <Row>
        {categorias.map((categoria, index) => (
          <Col key={index} sm={12} md={6} lg={3} className="mb-4">
            <Card className="bg-dark text-black">
              <Card.Img src={categoria.fondo} alt={categoria.nombre} />
              <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                <Card.Title className="card-categoria">
                  {categoria.nombre}
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categorias;
