import React from 'react';
import { useHistory } from 'react-router-dom';
import { WaveTopBottomLoading } from 'react-loadingg';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';

import api from '../../services/api';
import CardSection from './CardSection';

export default function CheckoutForm(props) {
  const stripe = useStripe();
  const history = useHistory();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const data = {
      value: props.value
    }

    const response = await api.post('/client_secret', data);

    const clientSecret = response.data.client_secret;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'South America',
        },
      }
    });

    if (result.error) {
      console.log(result.error.message);
    } else {

      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        // cookies.remove('cartItems');
        history.push({ pathname: '/', state: { notification: true } });

        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  };

  const handleButton = (event) => {
    document.querySelector("#loading-page").classList.remove("hidden");
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardSection />
      <button className="btn btn-primary btn-block" onClick={handleButton} disabled={!stripe}>Confirm order</button>
      {/* <Notification open={showNotification} /> */}

      <div id="loading-page" className="hidden">
        <WaveTopBottomLoading color="#121212" />
      </div>
    </form>
  );
}