import { useState } from "react";
import { Link } from "react-router-dom";
import "./nuevoVideo.css";
import TextInput from "./textInput/TextInput";
import Button from "../button/Button";
function NuevoVideo() {
  const [name, setName] = useState();

  return (
    <section className="container__form">
      <form action="">
        <h2>Nuevo video</h2>
        <TextInput inputName="titulo de la pelicula" />
        <TextInput inputName="link de la Portada" />
        <TextInput inputName="link del trailer" />
        <TextInput inputName="codigo de seguridad" />
      </form>

      <div className="botonera">
        <div>
          <Button text="Guardar" />
          <Button text="limpiar" />
        </div>
        <Link to="/NuevaCategoria/">
          <Button text="Nueva Categoria" />
        </Link>
      </div>
    </section>
  );
}

export default NuevoVideo;
