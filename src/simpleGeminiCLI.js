import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync';

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

// Chat session create karo with empty history
const chat = ai.chats.create({
  model: "gemini-2.0-flash",
  history: [], // Conversation ka pura record
});

async function main() {
  const userProblem = readlineSync.question("Ask me anything --> ");

  // Gemini ko user ka message bhejna
  const response = await chat.sendMessage({ message: userProblem });

  // Gemini ka reply dikhana
  console.log(response.text);

  // Loop again for next input
  main();
}

main();
