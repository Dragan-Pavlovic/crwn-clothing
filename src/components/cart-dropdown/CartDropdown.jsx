import classes from "./CartDropdown.module.scss";
import Button from "../UI/button/Button";
import CartItem from "../cart-item/CartItem";
import { useSelector } from "react-redux";

const CartDropdown = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className={classes["cart-dropdown"]}>
      {!!cartItems.length && (
        <>
          <div className={classes["cart-items"]}>
            {cartItems.map(({ id, ...other }) => (
              <CartItem key={id} {...other} />
            ))}
          </div>
          <Button>GO TO CHECKOUT</Button>{" "}
        </>
      )}

      {!!!cartItems.length && <p>Cart is empty!</p>}
    </div>
  );
};

export default CartDropdown;
