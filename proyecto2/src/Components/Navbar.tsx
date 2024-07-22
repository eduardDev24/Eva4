import { Navbar, Nav, Container } from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import "../App.css";

const Navbar1 = () => {
  return (
    <>
      <div className="Navbar-1">
        <Navbar
          className="navbar sm-6 lg-6"
          fixed="top"
          variant="dark"
          expand="lg"
        >
          <Container>
            <Navbar.Brand href="#">
              <img
                src="./src/assets/logo.jpg"
                width="70"
                height="65"
                className="d-inline-block align-top"
                alt="imagen logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="nav me-auto">
                <NavLink className="mx-2" to='/'>Inicio</NavLink>
                <NavLink className="mx-2" to='/tienda'>Estrenos</NavLink>
                <NavLink className="mx-2" to="/categorias">Categorías</NavLink>
                <NavLink to='/comentarios'>Comentarios</NavLink>
              </Nav>
              <Nav>
                <NavLink to="/registrarse">Registrarse</NavLink>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Navbar1;
