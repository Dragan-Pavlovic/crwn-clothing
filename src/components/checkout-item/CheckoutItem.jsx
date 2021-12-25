import classes from "./CheckoutItem.module.scss";

const CheckoutItem = ({ item }) => {
  const { name, quantity, price, imageUrl } = item;
  const formatedPrice = `$${price.toFixed(2)}`;
  return (
    <div className={classes["checkout-item"]}>
      <div className={classes["image-container"]}>
        <img src={imageUrl} alt="item" />
      </div>
      <span className={classes.name}>{name}</span>
      <span className={classes.quantity}>{quantity}</span>
      <span className={classes.price}>{formatedPrice}</span>
      <div className={classes["remove-button"]}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
