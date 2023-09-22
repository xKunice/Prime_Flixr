import "./nuevoVideo.css";
import Form from "../form/Form";
function NuevoVideo() {
  const formTitle = "Nuevo Video";
  const selectOptions = [
    { value: "option1", label: "Opción 1" },
    { value: "option2", label: "Opción 2" },
    { value: "option3", label: "Opción 3" },
  ];

  const inputs = [
    { name: "titulo", label: "titulo de la pelicula" },
    { name: "portada", label: "Link de la portada" },
    { name: "trailer", label: "Link del trailer" },
    { name: "descripcion", label: "Descripcion", type: "textArea" },
    {
      name: "categoria",
      label: "categoria",
      type: "select",
      options: selectOptions,
    },
    { name: "codigo de seguridad", label: "codigo de seguridad" },
  ];
  return (
    <>
      <Form inputs={inputs} formTitle={formTitle} />
    </>
  );
}

export default NuevoVideo;
