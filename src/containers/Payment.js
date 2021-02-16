import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../components/CheckOutForm";
import { useLocation } from "react-router-dom";

const Payment = () => {
  // data from offer container
  const location = useLocation();
  const { title, price } = location.state;
  const transport = price / 20;
  const total = Number(price) + Number(transport);
  // Stripe public key
  const stripePromise = loadStripe(
    "pk_test_51ILSaaG38Od39rX28UkjJMDGh8BRwguGp6uB7gz4EODjm1gOlsOzTWXNJMrMOsM4VwFu5snwtXjOWLN0ERfKRwL100FYPJ7ooJ"
  );

  return (
    <div className="payment-body">
      <div className="payment-container">
        <div className="payment-summary">
          <span>MON PANIER</span>
          <div className="content">
            <ul>
              <li>Commande : {title}</li>
              <li>Prix : {price}€</li>
              <li>Livraison : {transport}€</li>
              <li>TOTAL : {total}€</li>
            </ul>
          </div>
        </div>
      </div>
      <Elements stripe={stripePromise}>
        <CheckOutForm total={total} title={title} />
      </Elements>
    </div>
  );
};

export default Payment;
