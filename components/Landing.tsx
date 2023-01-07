import type { Game } from '../app/utils/gameReducer';
import { NextPage } from "next"

import './globals.css';

interface LandingProps {
  dispatcher: (gameState: Partial<Game>) => void;
}

const Landing: NextPage<LandingProps> = ({ dispatcher }) => {
  const handleButtonClick = () => {
    dispatcher({ state: 'inGame' });
  }

  return (
    <div className="main-card center">
      <div className="card-content center">
        <h1>Quiz de Programação</h1>
        <p>Teste seus conhecimentos sobre programação</p>
        <div className="button center">
          <button onClick={handleButtonClick}>COMEÇAR</button>
        </div>
      </div>
    </div>
  )
}

export default Landing;
