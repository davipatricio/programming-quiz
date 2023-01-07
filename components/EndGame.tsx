import type { Game } from '../app/utils/gameReducer';
import { NextPage } from "next"

import './globals.css';

interface EndGameProps {
  dispatcher: (gameState: Partial<Game>) => void;
  won: boolean;
}

const EndGame: NextPage<EndGameProps> = ({ dispatcher, won }) => {
  const handleRestart = () => {
    dispatcher({ state: 'landing' });
  }

  return (
    <div className="main-card center">
      <div className="card-content center">
        <h2>Fim de Jogo</h2>
        {won ? <h4>Você venceu! Que tal outra rodada?</h4> : <h4>Você perdeu! Que tal tentar novamente?</h4>}

        <div>
          <button className="restart-button" onClick={handleRestart}>RECOMEÇAR JOGO</button>
        </div>
      
      </div>
    </div>
  )
}

export default EndGame;
