import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import axios from "axios";
import { cartActions } from "../../Store/cart-slice/cartSlice";

const StripeCheckoutButton = ({ price }) => {
  const dispatch = useDispatch();
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KAuM4JRGos4wyqFd6W7SgQWaTSDtdMaXxPE0bUEo2RW6HD2evEUIO93n68p4r3dCaedwMRfWKFYCuAXOqBpUmhh00F4FhEmnO";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert("Payment successful");
        dispatch(cartActions.clearCart());
      })
      .catch((err) => {
        console.log(err);
        alert(
          "There was an issue with your payment! Please use provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price.toFixed(2)}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      allowRememberMe
    />
  );
};

export default StripeCheckoutButton;
