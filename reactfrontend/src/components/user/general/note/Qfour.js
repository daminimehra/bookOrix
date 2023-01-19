import React from "react";
import { useState } from "react";

const QuizCompfour = () => {
  var Questionbank = [
    {
      Question: "What is the name of Shakuntala’s birth father?",
      Answers: [
        { Answer: "Brahmarishi Vishwamitra", isCorrect: true },
        { Answer: "Brahmarishi Arjun", isCorrect: false },
      ],
    },
    {
      Question: "What is Rishi Yamdagni’s son’s name?",
      Answers: [
        { Answer: "Dushyant", isCorrect: false },
        { Answer: "Parshu-Raam", isCorrect: true },
      ],
    },
    {
      Question: "What is Vishwamitra's grandson's name?",
      Answers: [
        { Answer: "Bharat", isCorrect: true },
        { Answer: "Narayan", isCorrect: false },
      ],
    },
    {
      Question: "Who was the son and legal heir of Brahmarishi Vishwamitra?",
      Answers: [
        { Answer: "Deval", isCorrect: true },
        { Answer: "Aryan", isCorrect: false },
      ],
    },
    {
      Question:
        "Vishwamitra, the renowned Kshatriya king discovered the primeval…",
      Answers: [
        { Answer: "Hanuman Chalisa", isCorrect: false },
        { Answer: "Gayatri Mantra", isCorrect: true },
      ],
    },
  ];

  //useState Hook
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerResponse = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questionbank.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div>
      <div className="appfour">
        {showScore ? (
          <div className="score-section">
            You have scored {score} out of {Questionbank.length}
            <>
              <button type="submit" onClick={resetQuiz}>
                Play Again!!
              </button>
            </>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count" style={{ color: " #caf7e2" }}>
                <span style={{ color: " #caf7e2" }}>{currentQuestion + 1}</span>
                /{Questionbank.length}
              </div>

              <div className="question-text">
                <h3>{Questionbank[currentQuestion].Question}</h3>
              </div>
            </div>

            <div className="answer-section">
              <h4>
                {Questionbank[currentQuestion].Answers.map((answer) => (
                  <button
                    onClick={() => handleAnswerResponse(answer.isCorrect)}
                  >
                    {answer.Answer}
                  </button>
                ))}
              </h4>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizCompfour;
