import "./textInput.css";
const TextInput = (props) => {
  const { inputName } = props;

  return (
    <div className="text-input">
      <label>{inputName.toUpperCase()}</label>
      <input placeholder={`ingresar ${inputName}`} name={inputName} />
    </div>
  );
};

export default TextInput;
