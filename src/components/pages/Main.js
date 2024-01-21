import React from "react";
import { useState } from "react";
import "./main.css";

function Main() {
  const [challenges, setChallenges] = useState([
    "question1",
    "question2",
    "questions3",
  ]);

  const [challengesButton, setChallengesButton] = useState(false);
  const [selectedChallenges, setSelectedChallenges] = useState([]);
  const [completedChallenges, setCompletedChallenges] = useState([]);

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
            "give me 3 one sentence eco-friendly challenges accomplishable in one day",
        },
      ],
      temperature: 0.7,
      top_p: 1,
    };
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + API_KEY,
        },
        body: JSON.stringify(APIBody),
      });
      const data = await response.json();

      setChallenges(
        data.choices[0].message.content
          .split(/\d+\.\s+/)
          .filter((item) => item.trim().length > 0)
      );
      setSelectedChallenges([]); // Clear selected challenges when new challenges are generated
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

  const handleToggleSelect = (idx) => {
    const isSelected = selectedChallenges.includes(idx);
    if (isSelected && !completedChallenges.includes(idx)) {
      // Mark as completed if not already completed
      setCompletedChallenges([...completedChallenges, idx]);
    }
    if (!isSelected) {
      setSelectedChallenges([...selectedChallenges, idx]);
    }
  };

  // const handleMarkIncomplete = (idx) => {
  //   const isSelected = selectedChallenges.includes(idx);
  //   if (isSelected) {
  //     setSelectedChallenges(selectedChallenges.filter((selectedIdx) => selectedIdx !== idx));
  //   } else {
  //     setSelectedChallenges([...selectedChallenges, idx]);
  //   }
  // };

  return (
    <div className="challengeContainer">
      <button
        className="challengeGeneratorButton"
        disabled={challengesButton}
        onClick={callopenAIAPI}
      >
        Generate A Motivation Challenge
      </button>
      <div className="challengeButtonContainer">
        {challenges.map((challenge, idx) => (
          <div key={idx} className="challengeButtonContainer">
            <button
              className={`challengeButton ${
                selectedChallenges.includes(idx) ? "selected" : ""
              } ${completedChallenges.includes(idx) ? "completed" : ""}`}
              onClick={() => handleToggleSelect(idx)}
            >
              {challenge}
            </button>
            {/* <button onClick={() => handleMarkIncomplete(idx)}>Mark as Incomplete</button> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
