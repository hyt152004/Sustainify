import React from "react";
import { useState } from "react";
import "./main.css";

function Main() {
  const [challengesButton, setChallengesButton] = useState(false);
  const storedChallenges = JSON.parse(localStorage.getItem("challenges")) || [];

  // console.log(JSON.stringify(["question1", "question2"]));

  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

  async function callopenAIAPI() {
    // user will not be able to press the challenges Button
    setChallengesButton(true);
    challengesButtonTimer();

    const APIBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "give me 3 one setence eco-friendly challenges accomplisable in one day",
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
          localStorage.setItem(
            "challenges",
            JSON.stringify(
              data.choices[0].message.content
                .split(/\d+\.\s+/)
                .filter((item) => item.trim().length > 0)
            )
          );
        });
    } catch (e) {
      console.log(e);
    }
  }

  // counts to 10 and after setChallengesButton(false)
  const challengesButtonTimer = () => {
    var timer = 10;
    const interval = setInterval(() => {
      timer--;
      if (timer < 0) {
        setChallengesButton(false);
        clearInterval(interval);
      }
    }, 1000);
  };

  const handleRemove = (idx) => {
    localStorage.setItem(
      "challenges",
      JSON.parse(localStorage.getItem("challenges")).filter(
        (_, index) => index !== idx
      )
    );
  };

  return (
    <div className="challengeContainer">
      <button
        className="challengeGeneratorButton"
        disabled={challengesButton}
        onClick={callopenAIAPI}
      >
        Generate Green Challenges
      </button>
      <div className="challengeButtonContainer">
        {storedChallenges.map((challenge, idx) => (
          <button
            key={idx}
            className="challengeButton"
            onClick={() => {
              handleRemove(idx);
            }}
          >
            {challenge}
          </button>
        ))}
      </div>
    </div>
  );
}
export default Main;
