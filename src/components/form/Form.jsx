import TextInput from "../textInput/TextInput";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "../button/Button";
import { useState } from "react";
import "./form.css";

function Form({ inputs, formTitle }) {
  const [values, setValues] = useState({});

  const handleChange = (nameInput, valueInput) => {
    setValues({ ...values, [nameInput]: valueInput });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const location = useLocation();
  const showButton = location.pathname == "/NuevoVideo/";

  return (
    <section className="container__form">
      <form onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        {inputs.map((input) => (
          <TextInput
            key={input.name}
            type={input.type}
            label={input.label}
            name={input.name}
            value={values[input.name] || ""}
            OnChangeValue={handleChange}
            options={input.options}
          />
        ))}
      </form>
      <div className="botonera">
        <div className="buttons">
          <Button typeB="submit" text="Guardar" />
          <Button text="limpiar" />
        </div>
        {showButton && (
          <Link to="/NuevaCategoria/">
            <Button text="Nueva Categoria" />
          </Link>
        )}
      </div>
    </section>
  );
}

export default Form;
