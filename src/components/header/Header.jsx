import { Link } from "react-router-dom";
import classes from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

export default function Header() {
  return (
    <div className={classes.header}>
      <Link className={classes["logo-container"]} to="/">
        <Logo className={classes.logo} />
      </Link>
      <div className={classes.options}>
        <Link className={classes.option} to="/shop">
          SHOP
        </Link>
        <Link className={classes.option} to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
}
