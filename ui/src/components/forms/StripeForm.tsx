import React from 'react'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import { CheckoutForm } from './StripeCheckout';

const isProd = Boolean(window.location.host.indexOf('purefunc.io') > -1);
const stripeKey = isProd ? process.env.REACT_APP_STRIPE_KEY : 'pk_test_51IqRllDluiVUxoR8TUQ9BF1jJNkBu8b7KDJrXSMPgWI2kPUtn0ZuxT7aXHYJ58XpphwS49kM5d8BLnKEKBL9V4z400Dd3aZLfq'
const stripePromise = loadStripe(stripeKey)

export function StripeForm() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  )
}