import "../App.css";
import Button from "react-bootstrap/esm/Button";
import ComponenteLikes from "./Likes";



function Footer() {
  return (
    <>
    <div className="container-fluid" >
      <footer>
        <div className="container d-flex justify-content-center py-2">
          <Button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
          >
            <i className="fa fa-facebook-square"></i>
          </Button>
          <Button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
          >
            <i className="fa fa-youtube-square"></i>
          </Button>
          <Button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
          >
            <i className="fa fa-instagram"></i>
          </Button>
        <div className="div-like">
        <>
        <ComponenteLikes />
        </>
        </div>
        </div>
        <div className="text-center text-white p-1">
          © 2024 Todos los derechos reservados Software Only
        </div>
      </footer>
    </div>
    </>
  );
}
export default Footer;
