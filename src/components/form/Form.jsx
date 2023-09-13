import { useLocation } from "react-router-dom"

function Form (){
const location = useLocation();
console.log({location}) 
return(
    <h1>soy un formulario</h1>
)
}

export default Form