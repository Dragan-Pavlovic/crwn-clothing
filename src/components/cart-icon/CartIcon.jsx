import classes from "./CartIcon.module.scss";
import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cartSlice";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  console.log(cartItems);
  const toggleShowCartHandler = () => {
    dispatch(cartActions.toggleCartHidden());
  };

  return (
    <div onClick={toggleShowCartHandler} className={classes["cart-icon"]}>
      <ShoppingIcon className={classes["shopping-icon"]} />
      <span className={classes["item-count"]}>0</span>
    </div>
  );
};

export default CartIcon;
