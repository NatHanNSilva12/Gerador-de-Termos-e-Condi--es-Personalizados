app.post('/gerar-termo', (req, res) => {
    const { businessName, businessEmail, businessWebsite, returnPolicy } = req.body;

    // Lógica para gerar os termos e condições
    const generatedTerms = `Termos e Condições para ${businessName}:\n\nE-mail: ${businessEmail}\nWebsite: ${businessWebsite}\nPolítica de Devolução: ${returnPolicy}`;

    res.json({ terms: generatedTerms });
});
