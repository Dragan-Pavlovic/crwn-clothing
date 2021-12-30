import React, { useEffect } from "react";
import classes from "./CartDropdown.module.scss";
import Button from "../UI/button/Button";
import CartItem from "../cart-item/CartItem";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectIsDropdownHidden,
} from "../../Store/cart-slice/cartSeletors";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cart-slice/cartSlice";

const CartDropdown = () => {
  const isHidden = useSelector(selectIsDropdownHidden);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const history = useHistory();

  const goToCheckoutHandler = () => {
    history.push("/checkout");
  };

  //listen for ESC keypress to close dropdown (remove listener when component unmounts)
  useEffect(() => {
    const keyPressHandler = (e) => {
      if (e.key?.toLowerCase() === "escape" && isHidden === false) {
        dispatch(cartActions.toggleCartHidden());
      }
    };
    document.addEventListener("keydown", keyPressHandler);
    return () => {
      document.removeEventListener("keydown", keyPressHandler);
    };
  }, [dispatch, isHidden]);

  useEffect(() => {
    const unsubscribeHistory = history.listen((e) => {
      if (!isHidden) dispatch(cartActions.toggleCartHidden());
    });

    return unsubscribeHistory;
  }, [isHidden, dispatch, history]);

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
