// import {
//   signInWithFacebook,
//   signInWithGoogle,
// } from "../../firebase/firebase.utils";
import useFormInput from "../../hooks/useFormInput";
import Button from "../UI/button/Button";
import FormInput from "../UI/form-input/FormInput";
import classes from "./SignIn.module.scss";
import { useDispatch } from "react-redux";
import { userActions } from "../../Store/user-slice/userSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const {
    state,
    dispatch: dispatchUseFormAction,
    inputChangeHandler,
  } = useFormInput();
  const { email, password } = state;

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(userActions.emailSignInStart({ ...state }));
    dispatchUseFormAction({ type: "CLEAR" });
  };

  const signInWithGoogleHandler = () => {
    dispatch(userActions.googleSignInStart());
  };

  const signInWithFacebookHandler = () => {
    dispatch(userActions.facebookSignInStart());
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
            onClick={signInWithGoogleHandler}
            className={classes["button-google"]}
          >
            SIGN IN WITH GOOGLE
          </Button>
        </div>
        <Button
          type="button"
          className={classes["button-facebook"]}
          onClick={signInWithFacebookHandler}
        >
          LOGIN WITH FB
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
