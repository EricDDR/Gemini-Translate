require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = 3000; 

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

app.use(cors()); 
app.use(express.json()); 

app.post('/translate', async (req, res) => {
  try {
    const { text, targetLanguage } = req.body;

    if (!text || !targetLanguage) {
      return res.status(400).json({ error: 'O texto e o idioma de destino são obrigatórios.' });
    }

    const prompt = `Traduza o seguinte texto para ${targetLanguage} de forma concisa: "${text}"`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const translation = response.text();

    res.json({ translation: translation });

  } catch (error) {
    console.error('Erro durante a tradução:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao se comunicar com a API do Gemini.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});