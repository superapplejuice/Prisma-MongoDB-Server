import Stripe from 'stripe'

import { MutationResolvers } from '../types'

import { createAlert } from '../../utils/functions'

const stripe = new Stripe(process.env.STRIPE_SKEY, {
  apiVersion: '2020-03-02',
  maxNetworkRetries: 3,
  typescript: true,
})

const PaymentMutations: MutationResolvers = {
  makePayment: async (parent, { data }) => {
    // obtain payment_method_id from client
    const { amount, paymentMethodId } = data

    // create a client_secret using the payment_method_id
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'sgd',
      payment_method: paymentMethodId,
    })

    if (!paymentIntent || !paymentIntent.client_secret) {
      throw new Error('Payment failed!')
    }

    // return client_secret to client, complete purchase flow there
    return createAlert(false, paymentIntent.client_secret)
  },
}

export default PaymentMutations
