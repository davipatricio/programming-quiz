type GameProgress = 'landing' | 'inGame' | 'ended';

export interface Game {
	state: GameProgress;
	won: boolean;
}

export function gameReducer(state: Game, data: Partial<Game>) {
	return {
		...state,
		...data,
	};
}