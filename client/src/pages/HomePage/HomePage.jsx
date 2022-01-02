import Directory from "../../components/directory/Directory";
import classes from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <div className={classes.homepage}>
      <Directory />
    </div>
  );
}
