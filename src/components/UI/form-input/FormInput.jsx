import classes from "./FormInput.module.scss";

const FormInput = ({ onChange, labelHtmlFor, labelText, ...input }) => {
  const changeHandler = (e) => {
    const { value, name } = e.target;
    onChange(value, name);
  };

  return (
    <div className={classes.group}>
      <input
        onChange={changeHandler}
        className={classes["form-input"]}
        {...input}
      />

      {labelText && (
        <label
          className={`${input.value.length ? "shrink" : ""}${
            classes["form-input-label"]
          }`}
          htmlFor={labelHtmlFor}
        >
          {labelText}
        </label>
      )}
    </div>
  );
};

export default FormInput;
