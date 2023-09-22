import "./textInput.css";
const TextInput = (props) => {
  const { label, name, value, OnChangeValue, type, options } = props;

  if (type == "textArea") {
    return (
      <div className="text-input">
        <label htmlFor={name}>{label.toUpperCase()}</label>
        <textarea
          id={name}
          name={name}
          value={value}
          placeholder={`Digitar ${name}`}
          onChange={(event) => OnChangeValue(name, event.target.value)}
        />
      </div>
    );
  } else if (type === "select") {
    return (
      <div className="text-input">
        <label htmlFor={name}>{label.toUpperCase()}</label>
        <select
          id={name}
          name={name}
          value={value}
          onChange={(event) => OnChangeValue(name, event.target.value)}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  } else {
    return (
      <div className="text-input">
        <label htmlFor={name}>{label.toUpperCase()}</label>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder={`Digitar ${name}`}
          onChange={(event) => OnChangeValue(name, event.target.value)}
        />
      </div>
    );
  }
};

export default TextInput;
