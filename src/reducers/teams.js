// Teams Reducer

const TEAMS_INITIAL_STATE = [];

export default (state = TEAMS_INITIAL_STATE, action) => {
	switch (action.type) {
		case "ADD_TEAM":
			return [...state, action.team];
		case "REMOVE_TEAM":
			return state.filter(({ id }) => id !== action.id);
		case "UPDATE_TEAM":
			return state.map(team => {
				if (team.id === action.id) {
					return { ...team, ...action.updates };
				} else {
					return team;
				}
			});
		default:
			return state;
	}
};
