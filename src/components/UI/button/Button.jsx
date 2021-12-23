import classes from "./Button.module.scss";

const Button = ({ children, className, ...otherProps }) => {
  return (
    <button
      className={`${className ? className + " " : ""}${
        classes["custom-button"]
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
