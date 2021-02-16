import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../components/CheckOutForm";

// Public key
const stripePromise = loadStripe(
  "pk_test_51ILSaaG38Od39rX28UkjJMDGh8BRwguGp6uB7gz4EODjm1gOlsOzTWXNJMrMOsM4VwFu5snwtXjOWLN0ERfKRwL100FYPJ7ooJ"
);

const Payment = () => {
  return (
    <div className="payment-body">
      <div className="payment-container">
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
