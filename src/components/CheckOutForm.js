import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const CheckOutForm = ({ total, title }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Stripe get bank data input by the user
      const cardElement = elements.getElement(CardElement);
      // Request creation of token with Stripes's API
      const stripeResponse = await stripe.createToken(cardElement, {
        // Get user Id (will make dynamic later)
        name: "id du user",
      });
      // console.log(stripeResponse);
      // Token storage
      const stripeToken = stripeResponse.token.id;

      // Get request to server
      const response = await axios.post(
        // "http://localhost:3000/payment",
        "https://thomas-vinted-api.herokuapp.com/payment",
        {
          stripeToken: stripeToken,
          amount: total,
          title: title,
        }
      );
      if (response.data.status === "succeeded") {
        setSucceeded("Paiement validé ! Merci pour votre commande");
        history.push("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <CardElement />
      <button type="submit">Valider votre paiement</button>
      <span>{succeeded}</span>
    </form>
  );
};

export default CheckOutForm;
