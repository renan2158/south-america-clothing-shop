const stripe = require('stripe')('sk_test_diV9vP9OhZO8uXSkPlkKV1Ke00P6cF1Qe9');

// module.exports = {

// };

(async () => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 1000,
        currency: 'usd',
        payment_method_types: ['card'],
        receipt_email: 'jenny.rosen@example.com',
    });

	console.log(paymentIntent);
})();
