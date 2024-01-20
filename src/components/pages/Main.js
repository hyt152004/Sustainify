import React from "react";
import { useState } from "react";

function Main() {
  const [quote, setQuote] = useState("");
  const [quoteButton, setQuoteButton] = useState(false);

  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

  async function callopenAIAPI() {
    // user will not be able to press the Quote Button
    setQuoteButton(true);
    quoteButtonTimer();

    const APIBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "give me five different eco-friendly challenges accomplishable in a day",
        },
      ],
      temperature: 0.7,
      top_p: 1,
    };
    try {
      await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + API_KEY,
        },
        body: JSON.stringify(APIBody),
      })
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setQuote(data.choices[0].message.content);
        });
    } catch (e) {
      console.log(e);
    }
  }

  // counts to 10 and after setQuoteButton(false)
  const quoteButtonTimer = () => {
    var timer = 10;
    const interval = setInterval(() => {
      timer--;
      if (timer < 0) {
        setQuoteButton(false);
        clearInterval(interval);
      }
    }, 1000);
  };

  return (
    <div>
      <p>{quote}</p>
      <button disabled={quoteButton} onClick={callopenAIAPI}>
        Generate A Motivation Quote
      </button>
    </div>
  );
}

export default Main;
