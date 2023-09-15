import { useState } from "react"
import "./form.css"
import TextInput from "./textInput/textInput";
function Form (){ 

    const [name, setName] = useState();


return(
    <section className="container__form">
        <form action="">
            <h2>Nuevo video</h2>
            <TextInput/>

        </form>
    </section>
    

)
}

export default Form