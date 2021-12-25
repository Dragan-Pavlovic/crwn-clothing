import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../Store/cart-slice/cartSeletors";
import classes from "./Checkout.module.scss";

const Checkout = function () {
  const cartItems = useSelector(selectCartItems);
  const cartTotalPrice = useSelector(selectCartTotalPrice);

  const formatedCartTotalPrice = `TOTAL $${cartTotalPrice.toFixed(2)}`;

  return (
    <div className={classes["checkout-page"]}>
      <div className={classes["checkout-header"]}>
        <div className={classes["header-block"]}>
          <span>Product</span>
        </div>
        <div className={classes["header-block"]}>
          <span>Description</span>
        </div>
        <div className={classes["header-block"]}>
          <span>Quantity</span>
        </div>
        <div className={classes["header-block"]}>
          <span>Price</span>
        </div>
        <div className={classes["header-block"]}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className={classes.total}>
        <span>{formatedCartTotalPrice}</span>
      </div>
    </div>
  );
};

export default Checkout;
