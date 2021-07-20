const stripe = require('../config/stripe')
const express = require('express')
const router = new express.Router();
const logger = require('../config/logger')
const processPayments = require("../stripe/processPayments")

router.post("/webhook", async (req, res) => {
  let data;
  let eventType;

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if(webhookSecret && process.env.NODE_ENV === "production") {
    let event;
    let signature = req.headers['stripe-signature'];

    try {
      event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      webhookSecret
    );
    } catch(err) {
      logger.log('error', "Webhook signature verification failed.");
      return res.sendStatus(400)
    }

    data = event.data;
    eventType = event.type;
  } else {
    data = req.body.data;
    eventType = req.body.type;
  }

  switch(eventType) {
    case 'checkout.session.completed':
      processPayments.processInitialCheckout(data.object)
      break;
    case 'invoice.paid':
      processPayments.processRenewalSuccess(data.object)
      logger.log('info', "Renewal complete");
      break;
    case 'invoice.payment_failed':
      processPayments.processRenewalFailure(data.object)
      logger.log('info', "Renewal failed");
      break;
    default:
      // ? Do we need to do anything here?
  }

  res.sendStatus(200);
});

module.exports = router;