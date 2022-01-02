import classes from "./FormInput.module.scss";
import React from "react";
const FormInput = React.forwardRef(
  ({ onChange, labelHtmlFor, labelText, ...input }, ref) => {
    const changeHandler = (e) => {
      const { value, name } = e.target;
      onChange(value, name);
    };

    return (
      <div className={classes.group}>
        <input
          ref={ref}
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
  }
);

export default FormInput;
