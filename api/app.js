const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const paymentRoutes = require('./routes/paymentRoutes');
const gerenateTerms = require('./routes/terms.Routes')

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); 

// Usar as rotas de pagamento
app.use('/api', paymentRoutes);

app.use('/api', gerenateTerms);

// Configurar a porta
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
