const express = require('express');
const { gerenateTerms } = require('../controllers/terms.Controller');

const router = express.Router();

router.post('/gerar-termo', gerenateTerms);

module.exports = router;