import React, { useState, useEffect } from "react";
import "./main.css";
import { ProgressBar } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import earthHealthy from "../../images/earth_healthy.gif";
import earthUnhealthy from "../../images/earth_unhealthy.gif";

function Main() {
  const [challengesButton, setChallengesButton] = useState(false);
  const [storedChallenges, setStoredChallenges] = useState(
    JSON.parse(localStorage.getItem("challenges")) || []
  );
  const [selectedChallenges, setSelectedChallenges] = useState(
    JSON.parse(localStorage.getItem("selectedChallenges")) || []
  );

  const [earthState, setEarthState] = useState(earthUnhealthy);

  useEffect(() => {
    const storedChallengesData = localStorage.getItem("challenges");
    if (storedChallengesData) {
      try {
        setStoredChallenges(JSON.parse(storedChallengesData));
      } catch (error) {
        console.error("Error parsing storedChallengesData:", error);
      }
    }

    const selectedChallengesData = localStorage.getItem("selectedChallenges");
    if (selectedChallengesData) {
      try {
        setSelectedChallenges(JSON.parse(selectedChallengesData));
      } catch (error) {
        console.error("Error parsing selectedChallengesData:", error);
      }
    }
  }, []);

  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

  async function callopenAIAPI() {
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

      localStorage.setItem("challenges", JSON.stringify(newChallenges));
      setStoredChallenges(newChallenges);
      // Reset selected challenges and update localStorage
      setSelectedChallenges([]);
      localStorage.setItem("selectedChallenges", "[]");
      setEarthState(earthUnhealthy);

      // Reset the styles of buttons
      document.querySelectorAll(".challengeButton").forEach((button) => {
        button.classList.remove("selected");
      });
    } catch (e) {
      console.error(e);
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
    checkEarthState();
    if (!selectedChallenges.includes(idx)) {
      setSelectedChallenges([...selectedChallenges, idx]);
    }
  };

  const dynamicClassName = (idx) => {
    return selectedChallenges.includes(idx)
      ? `challengeButton selected`
      : `challengeButton`;
  };

  useEffect(() => {
    localStorage.setItem(
      "selectedChallenges",
      JSON.stringify(selectedChallenges)
    );
  }, [selectedChallenges]);

  const calculateProgress = () => {
    if (storedChallenges.length === 0) {
      return 0;
    }

    const progress =
      (selectedChallenges.length / storedChallenges.length) * 100;
    return isNaN(progress) ? 0 : progress;
  };

  const checkEarthState = () => {
    if (selectedChallenges.length >= 2) {
      setEarthState(earthHealthy);
    } else {
      setEarthState(earthUnhealthy);
    }
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
            key={uuidv4()}
            className={dynamicClassName(idx)}
            onClick={() => {
              handleComplete(idx);
            }}
          >
            {challenge}
          </button>
        ))}
      </div>
      <ProgressBar
        now={calculateProgress()} // Use the dynamic progress value
        label={`${calculateProgress()}% completed`}
        animated
      />
      <img src={earthState} alt="character" className="img-fluid" />
    </div>
  );
}

export default Main;