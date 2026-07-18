const OpenAI = require("openai");
const tools = require("../config/tools");

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

const generateResponse = async (messages) => {

  const response = await client.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages,
    tools,
  });

  return response.choices[0].message;
};

module.exports = {
  generateResponse,
};