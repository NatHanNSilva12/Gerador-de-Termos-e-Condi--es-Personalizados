const stripe = require('../config/stripe');

exports.createCheckoutSession = async (req, res) => {
  try {
    const { paymentMethodId } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method: paymentMethodId,
      mode: 'payment',
      payment_intent_data: {
        capture_method: 'automatic',
      },
      line_items: [{
        price_data: {
          currency: 'brl',
          product_data: {
            name: 'Plano de Termos Personalizados',
            // Adicione mais detalhes conforme necessário
          },
          unit_amount: 2000, // Valor em centavos (ex: R$20,00)
        },
        quantity: 1,
      }],
      success_url: 'https://seu-dominio.com/sucesso', // URL de sucesso
      cancel_url: 'https://seu-dominio.com/cancelar',  // URL de cancelamento
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
