import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cart-slice/cartSlice";
import classes from "./CheckoutItem.module.scss";

const CheckoutItem = ({ item }) => {
  const { name, quantity, price, imageUrl, id } = item;
  const dispatch = useDispatch();
  const formatedPrice = `$${price.toFixed(2)}`;

  const removeItemFromCartHandler = () => {
    dispatch(cartActions.removeItem(id));
  };

  const increaseQuantityHandler = () => {
    dispatch(cartActions.addItemToCart(item));
  };

  const decreaseQuantityHandler = () => {
    dispatch(cartActions.decreaseItemQuantity(id));
  };

  return (
    <div className={classes["checkout-item"]}>
      <div className={classes["image-container"]}>
        <img src={imageUrl} alt="item" />
      </div>
      <span className={classes.name}>{name}</span>
      <span className={classes.quantity}>
        <div className={classes.arrow} onClick={decreaseQuantityHandler}>
          &#10094;
        </div>
        <span className={classes.value}>{quantity}</span>
        <div className={classes.arrow} onClick={increaseQuantityHandler}>
          &#10095;
        </div>
      </span>
      <span className={classes.price}>{formatedPrice}</span>
      <div
        className={classes["remove-button"]}
        onClick={removeItemFromCartHandler}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
