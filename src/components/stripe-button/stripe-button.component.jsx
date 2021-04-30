import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Im1QqCx7MqVAQAt7T0IJSEoBYUx1fbmQyMzkGrQUQ4e4wJNaFtNn6sMT27rStsremK7o6eslze2l5sa2Pfs3H8z00L55AKPdJ";

  const onToken = (token) => {
    console.log({ token });
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
