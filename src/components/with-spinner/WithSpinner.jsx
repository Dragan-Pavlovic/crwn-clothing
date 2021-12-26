import classes from "./WithSpinner.module.scss";

const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) => {
    if (isLoading) {
      return (
        <div className={classes.overlay}>
          <div className={classes["spinner-container"]}></div>
        </div>
      );
    } else {
      return <WrappedComponent {...otherProps} />;
    }
  };

export default WithSpinner;
