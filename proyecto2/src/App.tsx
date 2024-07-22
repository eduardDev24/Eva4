import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar1 from "./Components/Navbar";
import Banner from "./Components/Inicio";
import Movies from "./Components/Movies";
import Footer from "./Components/Footer";
import Comentario from "./Components/Comentario";
import Registrarse from "./Components/Registrarse";
import Categorias from "./Components/Categorias";

// creamos las rutas para cada seccion del navbar y mostrar cada componente con su seccion estas coincidiran con el nombre que le dimos en cada seccion en el componente Navbar.tsx
function App() {
  return (
    <>
      <Router>
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/tienda" element={<Movies />} />
          <Route path="/comentarios" element={<Comentario />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/registrarse" element={<Registrarse />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
