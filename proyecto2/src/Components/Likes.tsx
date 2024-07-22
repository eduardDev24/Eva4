
import { AiFillLike } from "react-icons/ai"; // importamos el icono me gusta
import Button from "react-bootstrap/button";
import { useEffect, useState } from "react";
import "../App.css";


function ComponenteLikes() {
  const [cont, setCont] = useState(() => {
    //isNaN valida si el elemento dentro no es un numero, si no, devuelve 0, si es, devuelve un entero
    return isNaN(localStorage.contador) ? 0 : parseInt(localStorage.contador);
  });

  //función para aumentar los likes
  function aumentarLikes() {
    const nuevoContador = cont + 1;
    setCont(nuevoContador);
    localStorage.contador = nuevoContador;
  }

  useEffect(() => {
    localStorage.contador = cont;
  }, [cont]);

  return (
    // se muestra la cantidad de likes
    <>
      <h5>Me Gusta: {localStorage.contador} 
              
        <Button className="btn-like" onClick={aumentarLikes}>
          <AiFillLike />
        </Button>
        
       </h5>
      
    </>
  );
}

export default ComponenteLikes;
