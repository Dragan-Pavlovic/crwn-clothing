import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword } from "firebase/auth";
import useFormInput from "../../hooks/useFormInput";
import Button from "../UI/button/Button";
import FormInput from "../UI/form-input/FormInput";
import classes from "./SignUp.module.scss";

const SignUp = () => {
  const { state, dispatch, inputChangeHandler } = useFormInput(true);
  const { email, password, confirmPassword, displayName } = state;
  console.log("sign up renders");
  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert(`passwords don't match`);
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      dispatch({ type: "CLEAR", isSignUp: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes["sign-up"]}>
      <h2 className={classes.title}>I do not have a account</h2>
      <span>Sign up with your email and password</span>

      <form className={classes["sign-up-form"]} onSubmit={submitHandler}>
        <FormInput
          onChange={inputChangeHandler}
          type="text"
          name="displayName"
          value={displayName}
          labelText="Display name"
          labelHtmlFor="display name"
          required
        />

        <FormInput
          onChange={inputChangeHandler}
          type="email"
          name="email"
          value={email}
          labelText="Email"
          labelHtmlFor="email"
          required
        />
        <FormInput
          onChange={inputChangeHandler}
          type="password"
          name="password"
          value={password}
          labelText="Password"
          labelHtmlFor="password"
          required
        />

        <FormInput
          onChange={inputChangeHandler}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          labelText="Confirm password"
          labelHtmlFor="confirm password"
          required
        />

        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  );
};

export default SignUp;
