const { OpenAI } = require("openai");
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

async function handleChat(req, res) {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }


  const userData = req.app.locals.userData;


  const prompt = `You are a financial assistant. The user has provided the following financial data: ${JSON.stringify(userData)}. Respond to the following message: ${message}`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const assistantResponse = completion.choices[0]?.message?.content || 'No response';

  
    return res.json({ response: assistantResponse });
  } catch (error) {
    console.error('Error in ChatGPT API:', error.message);
    return res.status(500).json({ error: 'An error occurred while processing the message', details: error.message });
  }
}

module.exports = { handleChat };
