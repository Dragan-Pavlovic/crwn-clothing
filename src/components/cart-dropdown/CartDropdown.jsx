import React from "react";
import classes from "./CartDropdown.module.scss";
import Button from "../UI/button/Button";
import CartItem from "../cart-item/CartItem";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../Store/cartSlice";

const CartDropdown = () => {
  console.log("cart drpodown runn");
  const cartItems = useSelector(selectCartItems);

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

export default React.memo(CartDropdown);
