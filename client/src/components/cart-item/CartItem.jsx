import classes from "./CartItem.module.scss";
import React from "react";
const CartItem = ({ imageUrl, price, name, quantity }) => {
  const formatedPrice = `$${price.toFixed(2)}`;
  return (
    <div className={classes["cart-item"]}>
      <img src={imageUrl} alt="item" />
      <div className={classes["image-details"]}>
        <span className={classes.name}>{name}</span>
        <span className={classes.price}>
          {quantity}x {formatedPrice}
        </span>
      </div>
    </div>
  );
};

export default React.memo(CartItem);
