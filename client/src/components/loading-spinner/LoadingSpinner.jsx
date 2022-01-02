import classes from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={classes.overlay}>
      <div className={classes["spinner-container"]}></div>
    </div>
  );
};

export default LoadingSpinner;
