import { useState } from "react";
import Form from "../form/Form";
import "./nuevacategoria.css";
function NuevaCategoria() {
  const formTitle = "Nueva Categoria";
  const inputs = [
    { name: "Nombre", label: "Nombre" },
    {
      name: "descripcion",
      label: "descripcion",
      type: "textArea",
    },
    { name: "Color", label: "color", type: "color" },
    { name: "codigo de seguridad", label: "codigo de seguridad" },
  ];
  return (
    <>
      <Form inputs={inputs} formTitle={formTitle} />
    </>
  );
}

export default NuevaCategoria;
