import "./formField.css";

function FormField({ children }) {
  return (
    <fieldset className="form-field">{children}</fieldset>
  );
}

export default FormField;
