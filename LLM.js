import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyBNpOjuZJNqBA07lUCwwwCdbxkr38INkDc" });

async function main() {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "Hi, my name is Krunal.",
    });
    console.log("")
    console.log("response-->");
    console.log(response.text);
    console.log("")
}
main();