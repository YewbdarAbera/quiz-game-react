import "./App.css";
// Quiz data
import React, { useState } from "react";
const orginalQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "What is 2 + 2?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "6", correct: false },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false },
      { text: "Neptune", correct: false },
    ],
  },
];

function App() {
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showQustion, setShowQustion] = useState(false);

  function startQuiz() {
    setQuestionIndex(0);
    setScore(0);
    setShowNextButton(true);
    setShowQustion(true);
    setShowResult(false);
  }

  function nextQuiz() {
    setQuestionIndex((prevIndex) => {
      const newIndex =
        prevIndex < orginalQuestions.length - 1 ? prevIndex + 1 : 0;
      newIndex === 0 && setShowResult(true);
      return newIndex;
    });
  }

  function getAnswerFromButton(answer) {
    if (answer) {
      setScore((preScore) => preScore + 1);
      console.log("this is correct answer");
    }
  }

  const { question, answers } = orginalQuestions[questionIndex] || {};
  console.log(answers);
  return (
    <div className="container">
      <h1>JavaScript Quiz Game</h1>
      <div id="quiz-container">
        {showQustion && !showResult ? (
          <div id="question-container" className="hide">
            <div id="question">{question}</div>
            <div id="answer-buttons" className="button-grid">
              {answers.map((ans, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => getAnswerFromButton(ans.correct)}
                  >
                    {ans.text}
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}
        <div id="controls">
          <button id="start-btn" className="start-btn" onClick={startQuiz}>
            Start Quiz
          </button>
          {showNextButton ? (
            <button id="next-btn" className="next-btn hide" onClick={nextQuiz}>
              Next
            </button>
          ) : null}
        </div>
        {showResult ? (
          <div id="results" className="hide">
            <h2>Results</h2>
            <p id="score">
              Score: {score}/{orginalQuestions.length}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
