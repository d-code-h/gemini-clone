// Make sure to include these imports:
import { GoogleGenerativeAI } from '@google/generative-ai';
const genAI = new GoogleGenerativeAI('AIzaSyAWg5phs0d84ymKZke2jqkKANVvtvkl3gA');

const run = async () => {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const prompt = 'Write a story about a magic backpack.';

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
};

run();
