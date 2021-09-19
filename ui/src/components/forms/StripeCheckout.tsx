import React from 'react'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'

export const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async(event) => {
    event.preventDefault()
    if(!stripe || !elements) {
      return
    }

    const cardElement = elements.getElement(CardElement)
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement
    })

    if(error) {
      console.log('[error]', error)
    } else {
      console.log('[PaymentMethod]', paymentMethod)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={{
        style: {
          base: {
            fontSize: '16px',
            color: '#555abe',
            '::placeholder': {
              color: '#555abe'
            }
          }
        }
      }} />
      <button type="submit" disabled={!stripe}>Pay</button>
    </form>
  )
}