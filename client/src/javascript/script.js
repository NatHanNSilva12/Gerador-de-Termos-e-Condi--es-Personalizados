document.getElementById('generateBtn').addEventListener('click', generateTerms);

function generateTerms() {
    const businessName = document.getElementById('businessName').value;
    const businessEmail = document.getElementById('businessEmail').value;
    const businessWebsite = document.getElementById('businessWebsite').value;
    const returnPolicy = document.getElementById('returnPolicy').value;

    if (!businessName || !businessEmail || !businessWebsite || !returnPolicy) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const termsTemplate = `
        Termos e Condições

        Bem-vindo(a) ao ${businessName}!

        Ao acessar nosso website (${businessWebsite}), você concorda em cumprir e aceitar os seguintes Termos e Condições, que têm como objetivo proteger os direitos de ambas as partes.

        1. Política de Devolução:
        ${returnPolicy}

        2. Direitos Autorais:
        Todo o conteúdo deste website, incluindo textos, imagens, e design, é protegido por direitos autorais. É proibida a reprodução sem nossa autorização.

        3. Contato:
        Caso tenha dúvidas, entre em contato conosco pelo e-mail: ${businessEmail}.

        4. Alterações nos Termos:
        Reservamo-nos o direito de modificar esses Termos e Condições a qualquer momento. Quaisquer alterações serão publicadas em nosso website.

        Ao continuar utilizando nosso website, você concorda com esses Termos e Condições.
    `;

    document.getElementById('generatedTerms').innerText = termsTemplate;
    document.getElementById('termsResult').style.display = 'block';
    document.getElementById('downloadBtn').style.display = 'block';
}

document.getElementById('downloadBtn').addEventListener('click', function() {
    const termsText = document.getElementById('generatedTerms').innerText;
    const blob = new Blob([termsText], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'termos_condicoes.pdf';
    link.click();
});
