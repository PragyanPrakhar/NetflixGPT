import { GEMINI_KEY } from "./constants";
import { GoogleGenerativeAI } from "@google/generative-ai";

// const apiKey = GEMINI_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// export const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });

// export const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 64,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const apiKey = "AIzaSyBJdr0K54KCWrJjVCaHclHGD_Myz-agEGw";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: "user",
        parts: [
          {text: "suggest me five movies name for hollywood action movie in array of json ,no any other response , only array of json\n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "[\n  { \"title\": \"The Last Stand\" },\n  { \"title\": \"The Expendables\" },\n  { \"title\": \"John Wick\" },\n  { \"title\": \"Mission: Impossible - Fallout\" },\n  { \"title\": \"Mad Max: Fury Road\" }\n]"},
        ],
      },
    ],
  });




// run();