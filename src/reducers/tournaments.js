// Tournaments Reducer

const TOURNAMENTS_INITIAL_STATE = [];

export default (state = TOURNAMENTS_INITIAL_STATE, action) => {
	switch (action.type) {
		case "CREATE_TOURNAMENT":
			return [...state, action.tournament];
		case "REMOVE_TOURNAMENT":
			return state.filter(({ id }) => id !== action.id);
		case "UPDATE_TOURNAMENT":
			return state.map(tournament => {
				if (tournament.id === action.id) {
					return { ...tournament, ...action.updates };
				} else {
					return tournament;
				}
			});
		default:
			return state;
	}
};
