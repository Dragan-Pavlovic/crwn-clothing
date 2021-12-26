import React from "react";
import classes from "./CartDropdown.module.scss";
import Button from "../UI/button/Button";
import CartItem from "../cart-item/CartItem";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../Store/cart-slice/cartSeletors";
import { useHistory } from "react-router-dom";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const history = useHistory();

  const goToCheckoutHandler = () => {
    history.push("/checkout");
  };

  return (
    <div className={classes["cart-dropdown"]}>
      {!!cartItems.length && (
        <>
          <div className={classes["cart-items"]}>
            {cartItems.map(({ id, ...other }) => (
              <CartItem key={id} {...other} />
            ))}
          </div>
          <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>{" "}
        </>
      )}

      {!!!cartItems.length && (
        <span className={classes["empty-message"]}>Cart is empty!</span>
      )}
    </div>
  );
};

export default CartDropdown;
