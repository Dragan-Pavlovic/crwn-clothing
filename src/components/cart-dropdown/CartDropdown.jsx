import classes from "./CartDropdown.module.scss";
import Button from "../UI/button/Button";

const CartDropdown = () => {
  return (
    <div className={classes["cart-dropdown"]}>
      <div className={classes["cart-items"]} />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
