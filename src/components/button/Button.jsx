import "./button.css";

function Button(props) {
  const { clase, text, typeB } = props;

  return (
    <button type={typeB} className={clase}>
      {text}
    </button>
  );
}

export default Button;
