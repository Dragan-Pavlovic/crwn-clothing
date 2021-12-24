import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cartSlice";
import Button from "../UI/button/Button";
import classes from "./CollectionItem.module.scss";

export default function CollectionItem({ name, price, imageUrl, id }) {
  const dispatch = useDispatch();
  const formatedPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({ id, name, price, imageUrl }));
  };

  return (
    <div className={classes["collection-item"]}>
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={classes["collection-footer"]}>
        <span className={classes.name}>{name}</span>
        <span className={classes.price}>{formatedPrice}</span>
      </div>
      <Button
        onClick={addToCartHandler}
        className={classes["collection-button"]}
        inverted
      >
        Add to cart
      </Button>
    </div>
  );
}
