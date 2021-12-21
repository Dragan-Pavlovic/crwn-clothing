import classes from "./MenuItem.module.scss";

function MenuItem({ title, imageUrl, size }) {
  const formatedTitle = title.toUpperCase();
  console.log(size);
  return (
    <div className={`${classes["menu-item"]} ${size ? classes[size] : ""}`}>
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
