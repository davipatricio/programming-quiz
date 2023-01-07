'use client';

import { useReducer } from 'react';
import { gameReducer, Game } from './utils/gameReducer';

import LandingComponent from '../components/Landing';
import GameComponent from '../components/Game';
import EndGameComponent from '../components/EndGame';

const Home = () => {
  const [reducer, dispachToQuizReducer] = useReducer(gameReducer, { state: 'landing' } as Game)

  return (
    <>
      {reducer.state === 'landing' && <LandingComponent dispatcher={dispachToQuizReducer} />}
      {reducer.state === 'inGame' && <GameComponent dispatcher={dispachToQuizReducer} />}
      {reducer.state === 'ended' && <EndGameComponent dispatcher={dispachToQuizReducer} won={reducer.won} />}
    </>
  )
}

export default Home;
