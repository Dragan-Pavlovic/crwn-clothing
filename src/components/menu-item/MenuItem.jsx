import { useHistory } from "react-router-dom";
import classes from "./MenuItem.module.scss";

function MenuItem({ title, imageUrl, size, linkUrl }) {
  const history = useHistory();
  const formatedTitle = title.toUpperCase();

  const clickHandler = () => {
    history.push(linkUrl);
  }; 

  return (
    <div
      className={`${classes["menu-item"]} ${size ? classes[size] : ""}`}
      onClick={clickHandler}
    >
      <div
        className={classes["background-image"]}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={classes["content"]}>
        <h1 className={classes["title"]}>{formatedTitle}</h1>
        <span className={classes["subtitle"]}>SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
