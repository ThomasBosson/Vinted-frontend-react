import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Stripe get bank data input by the user
      const cardElement = elements.getElement(CardElement);
      // Request creation of token with Stripes's API
      const stripeResponse = await stripe.createToken(cardElement, {
        // Get user Id
        name: "id du user",
      });
      // console.log(stripeResponse);
      // Token storage
      const stripeToken = stripeResponse.token.id;

      // Get request to server
      const response = await axios.post(
        "https://thomas-vinted-api.herokuapp.com/payment",
        {
          stripeToken: stripeToken,
        }
      );
      // console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <CardElement />
      <button type="submit">Valider</button>
    </form>
  );
};

export default CheckOutForm;
