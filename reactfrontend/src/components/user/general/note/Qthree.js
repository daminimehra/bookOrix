import React from "react";
import { useState } from "react";

const QuizCompthree = () => {
  var Questionbank = [
    {
      Question: "Which house at Hogwarts does Harry belong to?",
      Answers: [
        { Answer: "Gryffindor", isCorrect: true },
        { Answer: "Hufflepuff", isCorrect: false },
        { Answer: "Slytherin", isCorrect: false },
        { Answer: "Lucas", isCorrect: false },
      ],
    },
    {
      Question: "Lord Voldemort was from the Muggle world",
      Answers: [
        { Answer: "True", isCorrect: false },
        { Answer: "False", isCorrect: true },
      ],
    },
    {
      Question: "What is Harry Potter’s Patronus?",
      Answers: [
        { Answer: "Stag", isCorrect: true },
        { Answer: "Lion", isCorrect: false },
        { Answer: "Horse", isCorrect: false },
        { Answer: "Unicorn", isCorrect: false },
      ],
    },
    {
      Question: " type of bag does Rita Skeeter have ",
      Answers: [
        { Answer: "Hippogriff feathers", isCorrect: false },
        { Answer: "Snake skin", isCorrect: false },
        { Answer: "Crocodile skin", isCorrect: true },
        { Answer: "Dragon skin", isCorrect: false },
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
      <div className="appthree">
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

              <div className="question-text" style={{ color: " #caf7e2" }}>
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

export default QuizCompthree;
