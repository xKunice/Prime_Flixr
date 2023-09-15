import { useState } from "react"
import "./form.css"
import TextInput from "./textInput/textInput";
import Button from "../button/Button";
function Form (){ 

    const [name, setName] = useState();


return(
    <section className="container__form">
        <form action="">
            <h2>Nuevo video</h2>
            <TextInput/>

        </form>

        <div className="botonera">
            <div>
                <Button text="Guardar"/>
                <Button text="limpiar"/>
            </div>
            <Button text="Nueva Categoria"/>
        </div>

            
    </section>
    

)
}

export default Form