import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe("pk_test_XcnTpw5mY7Pky71egyLivdBc00UkVLgoWF");

export default function Payment(props) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm value={props.value} />
    </Elements>
  );
}