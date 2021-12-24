import classes from "./Button.module.scss";

const Button = ({ children, className, inverted, ...otherProps }) => {
  const btnClasses = `${className ? className + " " : ""}${
    inverted ? classes.inverted + " " : ""
  }${classes["custom-button"]}`;

  //

  return (
    <button className={btnClasses} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
