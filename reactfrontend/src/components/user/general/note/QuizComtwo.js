import React from "react";
import { useState } from "react";

const QuizComtwo = () => {
  var Questionbank = [
    {
      Question: "Is it easy to  manage a `recalcitrant` crowd?",
      Answers: [
        { Answer: "No", isCorrect: true },
        { Answer: "Yes", isCorrect: false },
      ],
    },
    {
      Question: "Is being kind to street dogs a `nefarious` act?",
      Answers: [
        { Answer: "No", isCorrect: true },
        { Answer: "Yes", isCorrect: false },
      ],
    },
    {
      Question: "Is a narcissistic person fond of mirrors?",
      Answers: [
        { Answer: "No", isCorrect: false },
        { Answer: "Yes", isCorrect: true },
      ],
    },
    {
      Question: "For a drought-ridden village, are rains a bane?",
      Answers: [
        { Answer: "No", isCorrect: true },
        { Answer: "Yes", isCorrect: false },
      ],
    },
    {
      Question: "Would a good teacher elucidate sufficiently?",
      Answers: [
        { Answer: "Yes", isCorrect: true },
        { Answer: "No", isCorrect: false },
      ],
    },
    {
      Question: "Should a wrongly accused person be exculpated?",
      Answers: [
        { Answer: "Yes", isCorrect: true },
        { Answer: "No", isCorrect: false },
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
      <div className="apptwo">
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
                <h3 style={{ color: " #caf7e2" }}>
                  {Questionbank[currentQuestion].Question}
                </h3>
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

export default QuizComtwo;
