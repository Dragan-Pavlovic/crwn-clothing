import React from "react";
import classes from "./CartIcon.module.scss";
import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
import { useDispatch } from "react-redux";
import { cartActions, selectQuantity } from "../../Store/cartSlice";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const dispatch = useDispatch();
  const quantity = useSelector(selectQuantity);

  console.log("cartIcon rendered");

  const toggleShowCartHandler = () => {
    dispatch(cartActions.toggleCartHidden());
  };

  return (
    <div onClick={toggleShowCartHandler} className={classes["cart-icon"]}>
      <ShoppingIcon className={classes["shopping-icon"]} />
      <span className={classes["item-count"]}>{quantity}</span>
    </div>
  );
};

export default React.memo(CartIcon);
