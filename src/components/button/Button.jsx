import "./button.css"

function Button(props){
    const {clase, text}= props;

    return(
    <button className={clase}>{text}</button>);
}

export default Button;