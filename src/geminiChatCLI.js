import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync'

import dotenv from 'dotenv';
dotenv.config()

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY // .env file mein GEMINI_API_KEY hona chahiye
});

// Chat history store karne ke liye array
const History = []

async function Chatting(userProblem) {

    // User ka input history mein add karo
    History.push({
        role: 'user',
        parts: [{ text: userProblem }]
    })

    // Gemini model se response lo
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash", // Fast version of Gemini model
        contents: History, // Poora conversation context bhejna
    });

    // Gemini ka response bhi history mein add karo
    History.push({
        role: 'model',
        parts: [{ text: response.text }]
    })

    console.log(" ")
    // Gemini ka jawab print karo
    console.log(response.text);
    console.log(" ")
}

// Infinite loop jaisa main function jo baar-baar input lega
async function main() {
    var userProblem = readlineSync.question("Say here! -->   ")
    // User se input lo
    await Chatting(userProblem) // Gemini se chat karo
    main(); // Dubara se poochho
}

// Program start karo
await main();
