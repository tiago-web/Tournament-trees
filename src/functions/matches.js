// This file will return a set of functions that can be used in a new match

export const getRandomWinner = (teamId_1, teamId_2) => {
	const randomWinner = Math.floor(Math.random() * 2) + 1;

	if (randomWinner === 1) {
		return teamId_1;
	} else {
		return teamId_2;
	}
};
