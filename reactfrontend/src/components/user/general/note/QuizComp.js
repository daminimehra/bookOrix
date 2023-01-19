import React from "react";
import { useState } from "react";

const QuizComp = () => {
  var Questionbank = [
    {
      Question: "who was abducted into the upside down?",
      Answers: [
        { Answer: "Will", isCorrect: true },
        { Answer: "Mike", isCorrect: false },
        { Answer: "Dustin", isCorrect: false },
        { Answer: "Lucas", isCorrect: false },
      ],
    },
    {
      Question: "which  of these characters possesses telepathic powers?",
      Answers: [
        { Answer: "Joyce", isCorrect: false },
        { Answer: "Eleven", isCorrect: true },
        { Answer: "Lucas", isCorrect: false },
        { Answer: "Dustin", isCorrect: false },
      ],
    },
    {
      Question: "who's the monster in upside down?",
      Answers: [
        { Answer: "Demogorgon", isCorrect: true },
        { Answer: "Demon", isCorrect: false },
        { Answer: "Morgue", isCorrect: false },
        { Answer: "Pandemonium", isCorrect: false },
      ],
    },
    {
      Question: "what is Eleven's favourite snack?",
      Answers: [
        { Answer: "Eggo Waffles", isCorrect: true },
        { Answer: "Beanie Weenies", isCorrect: false },
        { Answer: "Twinkies", isCorrect: false },
        { Answer: "Big Macs", isCorrect: false },
      ],
    },
    {
      Question:
        "How does Joyce communicate with Will when the monster takes him?",
      Answers: [
        { Answer: "Smoke Signals", isCorrect: false },
        { Answer: "Morse Code", isCorrect: false },
        { Answer: "Christmas Lights", isCorrect: true },
        { Answer: "Semaphore", isCorrect: false },
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
      <div className="app">
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

export default QuizComp;
