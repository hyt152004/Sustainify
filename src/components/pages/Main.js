import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import "./main.css";

function Main() {
  const [challengesButton, setChallengesButton] = useState(false);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [storedChallenges, setStoredChallenges] = useState([]);

  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

  useEffect(() => {
    // Retrieve challenges from localStorage on component mount
    const storedChallenges = JSON.parse(localStorage.getItem("storedChallenges")) || [];
    setStoredChallenges(storedChallenges);

    // Retrieve completed challenges from localStorage on component mount
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges")) || [];
    setCompletedChallenges(completedChallenges);
  }, []);

  async function callopenAIAPI() {
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
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + API_KEY,
          },
          body: JSON.stringify(APIBody),
        }
      );
      const data = await response.json();

      const newChallenges = data.choices[0].message.content
        .split(/\d+\.\s+/)
        .filter((item) => item.trim().length > 0);

      setStoredChallenges(newChallenges);

      // Update completion state based on stored challenges
      const updatedCompletedChallenges = storedChallenges.map((_, idx) =>
        completedChallenges.includes(idx)
      );
      setCompletedChallenges(updatedCompletedChallenges);

      // Store challenges and completion states in localStorage
      localStorage.setItem("storedChallenges", JSON.stringify(newChallenges));
      localStorage.setItem("completedChallenges", JSON.stringify(updatedCompletedChallenges));
    } catch (e) {
      console.log(e);
    }
  }

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

  const handleComplete = (idx) => {
    setCompletedChallenges((prevCompleted) => {
      const updatedCompleted = [...prevCompleted];
      updatedCompleted[idx] = !updatedCompleted[idx]; // Toggle completion state
      return updatedCompleted;
    });
  };

  useEffect(() => {
    // Update local storage when completedChallenges change
    localStorage.setItem(
      "completedChallenges",
      JSON.stringify(completedChallenges)
    );
  }, [completedChallenges]);

  const calculateProgress = () => {
    if (storedChallenges.length === 0) {
      return 0;
    }
    const progress =
      (completedChallenges.filter((isCompleted) => isCompleted).length / storedChallenges.length) * 100;
    return isNaN(progress) ? 0 : progress;
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
            className={`challengeButton ${
              completedChallenges[idx] ? "completed" : ""
            }`}
            onClick={() => handleComplete(idx)}
          >
            {challenge}
          </button>
        ))}
      </div>
      <ProgressBar
        now={calculateProgress()}
        label={`${completedChallenges.filter((isCompleted) => isCompleted).length}% completed`}
        animated
      />
    </div>
  );
}

export default Main;
