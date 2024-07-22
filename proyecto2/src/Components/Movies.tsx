import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { getMovies } from "./ServicioApi";
import "../App.css";

interface Movie { // describimos la forma del objeto y sus 4 propiedades
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);// boleano que indica si los datos se cargan
  const [error, setError] = useState<string | null>(null);// para manejar posibles errores

  //usamos la herramienta useEffect de React para manejar efectos secundarios en los componentes funcionales
  //la funcion fetchMovies intenta obtener los datos de peliculas usando la funcion getMovies que se encuentra en el componente ServicioApi.tsx
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        setError("Error al recuperar peliculas");
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container className="container-card">
      <h1>Los Mejores Estrenos</h1>
      <Row>
        {movies.map((movie) => (  //map iterara sobre cada elemento del array
          <Col key={movie.id} sm={6} md={4} lg={3} className="mb-5">
            <Card>
              <Card.Img
                variant="top"// la propiedad variant="top" especifica que la imagen se mostrara en la parte superior de la tarjeta
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}//la imagen se mostrara del tamaño indicado
              />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Movies;
