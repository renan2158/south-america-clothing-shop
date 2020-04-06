const stripe = require('stripe')('sk_test_diV9vP9OhZO8uXSkPlkKV1Ke00P6cF1Qe9');

module.exports = {
    async generateClientSecret(request, response) {
        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: 1099,
                currency: 'usd',
                
                // Verify your integration in this guide by including this parameter
                metadata: {integration_check: 'accept_a_payment'},
            });

            return response.send(paymentIntent);
        } catch (err) {
            response.status(500).send(err);
        }
    }
};
