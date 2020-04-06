import React from 'react';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';

import api from '../../services/api';
import CardSection from './CardSection';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const response = await api.get('/client_secret');

    const clientSecret = response.data.client_secret;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Jenny Rosen',
        },
      }
    });

    if (result.error) {
      console.log(result.error.message);
    } else {

      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        alert("Sucess");

        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardSection />
      <button id="confirmButton" disabled={!stripe}>Confirm order</button>
    </form>
  );
}