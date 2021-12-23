import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";
import classes from "./SignInAndSignUp.module.scss";

export default function SignInAndSignUp() {
  return (
    <div className={classes["sign-in-and-sign-up"]}>
      <SignIn />
      <SignUp />
    </div>
  );
}
