import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Replace with your actual API key from Google AI Studio
const genAI = new GoogleGenerativeAI("AIzaSyChjsHFkepsyrDrvpRRsXySet5mgS052uQ");

function CaptionGenerator() {
  const [keywords, setKeywords] = useState("");
  const [caption, setCaption] = useState("");

  async function generateCaption() {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const response = await model.generateContent(
        `Create a social media caption using these keywords: ${keywords}`
      );
      const text = await response.response.text();
      setCaption(text);
    } catch (error) {
      console.error("Error generating caption:", error);
      setCaption("Failed to generate caption. Try again.");
    }
  }

  return (
    <div className="container">
        <h1>TRENDTALES</h1>
      <h2>Social Media Caption Generator</h2>
      <input
        type="text"
        placeholder="Enter keywords"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
      <button onClick={generateCaption}>Generate Captions</button>
      <p>{caption}</p>
    </div>
  );
}

export default CaptionGenerator;
