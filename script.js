const translateButton = document.getElementById('translateBtn');
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const languageSelect = document.getElementById('languageSelect');

translateButton.addEventListener('click', async () => {
    const textToTranslate = inputText.value;
    const targetLanguage = languageSelect.value;

    if (!textToTranslate.trim()) {
        alert('Por favor, digite algum texto para traduzir.');
        return;
    }

    outputText.value = 'Traduzindo...';
    translateButton.disabled = true;

    try {
        const response = await fetch('http://localhost:3000/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: textToTranslate,
                targetLanguage: targetLanguage
            })
        });

        const data = await response.json();

        if (response.ok) {
            outputText.value = data.translation;
        } else {
            outputText.value = `Erro: ${data.error}`;
        }

    } catch (error) {
        console.error('Falha na comunicação com a API:', error);
        outputText.value = 'Erro de conexão. Verifique se o servidor está rodando.';
    } finally {
        translateButton.disabled = false;
    }
});