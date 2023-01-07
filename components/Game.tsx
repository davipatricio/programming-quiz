import { NextPage } from "next";
import { useState } from 'react';
import type { Game } from "../app/utils/gameReducer";
import { Question, questions as unsortedQuestions } from '../app/utils/utilities';

import './globals.css';

interface GameProps {
  dispatcher: (gameState: Game) => void;
}

function shuffleQuestions() {
  return unsortedQuestions.sort(() => Math.random() - 0.5).map(q => {
    q.alternatives = q.alternatives.sort(() => Math.random() - 0.5)
    return q
  })
}

const Game: NextPage<GameProps> = ({ dispatcher }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [sortedQuestions] = useState(shuffleQuestions().slice(0, 10));

  const question = sortedQuestions[currentQuestion];

  const handleAnswer = (question: Question, answer: string) => {
    console.log(question.correctAnswer, answer)
    if (question.correctAnswer === answer) {
      // If the user completed the entire quiz
      if (currentQuestion + 1 == sortedQuestions.length) {
        dispatcher({ state: 'ended', won: true });
        return;
      }

      setCurrentQuestion(currentQuestion + 1);
      return
    }

    dispatcher({ state: 'ended', won: false });
  }

  return (
    <div className="main-card center">
      <div className="card-content center">
        <h2>{question.title}</h2>
        <h4>Pergunta {currentQuestion + 1} de {sortedQuestions.length}</h4>

        <div className="answer-buttons">
          {question.alternatives.map((alternative, index) => (
            <button className="answer-button" key={index} onClick={() => handleAnswer(question, alternative)}>
              {alternative}
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Game;
