// Matches

const MATCHES_INITIAL_STATE = [];

export default (state = MATCHES_INITIAL_STATE, action) => {
	switch (action.type) {
		case "CREATE_MATCH":
			return [...state, action.match];
		case "REMOVE_MATCH":
			return state.filter(({ id }) => id !== action.id);
		case "UPDATE_MATCH":
			return state.map(match => {
				if (match.id === action.id) {
					return { ...match, ...action.updates };
				} else {
					return match;
				}
			});
		default:
			return state;
	}
};
