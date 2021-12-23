import { useReducer } from "react";
import {
  signInWithFacebook,
  signInWithGoogle,
} from "../../firebase/firebase.utils";
import Button from "../UI/button/Button";
import FormInput from "../UI/form-input/FormInput";
import classes from "./SignIn.module.scss";

const initialState = {
  email: "",
  password: "",
};

const signInReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL-INPUT":
      return { email: action.payload, password: state.password };

    case "PASSWORD-INPUT":
      return { email: state.email, password: action.payload };

    case "CLEAR":
      return { email: "", password: "" };

    default:
      return state;
  }
};

const SignIn = () => {
  const [{ email, password }, dispatch] = useReducer(
    signInReducer,
    initialState
  );

  const inputChangeHandler = (value, name) => {
    dispatch({ type: `${name.toUpperCase()}-INPUT`, payload: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "CLEAR" });
  };

  return (
    <div className={classes["sign-in"]}>
      <h2>I already have account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={submitHandler}>
        <FormInput
          onChange={inputChangeHandler}
          type="email"
          name="email"
          value={email}
          required
          labelText="E-mail"
          labelHtmlFor="email"
        />

        <FormInput
          onChange={inputChangeHandler}
          type="password"
          name="password"
          value={password}
          required
          labelText="Password"
          labelHtmlFor="password"
        />
        <div className={classes.buttons}>
          <Button type="submit">SIGN IN</Button>

          <Button
            type="button"
            onClick={signInWithGoogle}
            className={classes["button-google"]}
          >
            SIGN IN WITH GOOGLE
          </Button>

          <Button
            type="button"
            className={classes["button-facebook"]}
            onClick={signInWithFacebook}
          >
            LOGIN WITH FB
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
