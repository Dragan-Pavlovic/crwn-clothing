import classes from "./CollectionItem.module.scss";

export default function CollectionItem({ name, price, imageUrl }) {
  const formatedPrice = `$${price.toFixed(2)}`;
  return (
    <div className={classes["collection-item"]}>
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={classes["collection-footer"]}>
        <span className={classes.name}>{name}</span>
        <span className={classes.price}>{formatedPrice}</span>
      </div>
    </div>
  );
}
