import classes from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <div className={classes.homepage}>
      <div className={classes["directory-menu"]}>
        <div className={classes["menu-item"]}>
          <div className={classes["content"]}>
            <h1 className={classes["title"]}>HATS</h1>
            <span className={classes["subtitle"]}>SHOP NOW</span>
          </div>
        </div>
        <div className={classes["menu-item"]}>
          <div className={classes["content"]}>
            <h1 className={classes["title"]}>JACKETS</h1>
            <span className={classes["subtitle"]}>SHOP NOW</span>
          </div>
        </div>
        <div className={classes["menu-item"]}>
          <div className={classes["content"]}>
            <h1 className={classes["title"]}>SNEAKERS</h1>
            <span className={classes["subtitle"]}>SHOP NOW</span>
          </div>
        </div>
        <div className={classes["menu-item"]}>
          <div className={classes["content"]}>
            <h1 className={classes["title"]}>WOMENS</h1>
            <span className={classes["subtitle"]}>SHOP NOW</span>
          </div>
        </div>
        <div className={classes["menu-item"]}>
          <div className={classes["content"]}>
            <h1 className={classes["title"]}>MENS</h1>
            <span className={classes["subtitle"]}>SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
}
