import { Button } from "react-bootstrap";
import "../App.css";

function Banner() {
  return (
    <div className="welcome-banner">
      <div className="welcome-text">
        <h1>Bienvenido a TuPelicula</h1>
        <p>
          Disfruta de títulos Originales y exclusivos, además de películas y
          series populares, por <strong>CLP 5,790/mes</strong>. Disfruta en
          cualquier momento.
        </p>
        <Button variant="primary" className="mb-2">
          ¿No estás registrado? Regístrate
        </Button>
        <br></br>
        <Button variant="outline-primary">
          Comienza prueba gratis por 30 dias*
        </Button>
      </div>
      <div className="welcome-image">
        <img src="/src/assets/imagen1.jpg" alt="imagen-Inicio" />
      </div>
    </div>
  );
}

export default Banner;
