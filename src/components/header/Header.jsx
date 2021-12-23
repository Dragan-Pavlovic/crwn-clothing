import { Link } from "react-router-dom";
import classes from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

export default function Header({ user }) {
  const signOutHandler = () => {
    auth.signOut();
  };
  return (
    <div className={classes.header}>
      <Link className={classes["logo-container"]} to="/">
        <Logo className={classes.logo} />
      </Link>
      <div className={classes.options}>
        <Link className={classes.option} to="/shop">
          SHOP
        </Link>

        {user ? (
          <div className={classes.option} onClick={signOutHandler}>
            SIGN OUT
          </div>
        ) : (
          <Link className={classes.option} to="/signin">
            SIGN IN
          </Link>
        )}
        <Link className={classes.option} to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
}
