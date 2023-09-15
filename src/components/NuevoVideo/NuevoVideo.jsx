import { useState } from "react";
import { Link } from "react-router-dom";
import "./nuevoVideo.css";
import TextInput from "./textInput/textInput";
import Button from "../button/Button";
function NuevoVideo() {
  const [name, setName] = useState();

  return (
    <section className="container__form">
      <form action="">
        <h2>Nuevo video</h2>
        <TextInput inputName="Titulo de la Pelicula" />
        <TextInput inputName="Link de la Portada" />
        <TextInput inputName="Link del trailer" />
        <TextInput inputName="Codigo de Seguridad" />
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
