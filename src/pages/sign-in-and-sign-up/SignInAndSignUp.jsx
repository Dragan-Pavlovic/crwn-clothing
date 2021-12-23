import SignIn from "../../components/signin/SignIn";
import classes from "./SignInAndSignUp.module.scss";

export default function SignInAndSignUp() {
  return (
    <div className={classes["sign-in-and-sign-up"]}>
      <SignIn />
    </div>
  );
}
