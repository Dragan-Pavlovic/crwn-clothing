import React from "react";
import classes from "./ErrorBoundary.module.scss";
import { withRouter } from "react-router";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false,
    };
  }
  static getDerivedStateFromError(err) {
    //process the error

    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log("info", info);
    console.log("error", error);
  }

  clickHandler = () => {
    this.setState({ hasErrored: false });
    this.props.history.replace("/");
  };
  render() {
    if (this.state.hasErrored) {
      return (
        <div className={classes["image-overlay"]}>
          <div
            className={classes["image-container"]}
            style={{
              backgroundImage: `url('/error.png')`,
            }}
          />
          <h2 className={classes["image-text"]}>Sorry this page is broken!</h2>
          <button onClick={this.clickHandler}>GO HOME</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);
