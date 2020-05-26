import { v4 as uuidv4 } from "uuid";

// Tournament actions

// CREATE_TOURNAMENT
export const createTournament = ({
	isRandomTournament,
	title = "",
	numOfTeams,
	teamNames = [],
} = {}) => ({
	type: "CREATE_TOURNAMENT",
	tournament: {
		id: uuidv4(),
		isRandomTournament,
		title,
		numOfTeams,
		teamNames,
	},
});

// REMOVE_TOURNAMENT
export const removeTournament = id => ({
	type: "REMOVE_TOURNAMENT",
	id,
});

// UPDATE_TOURNAMENT
export const updateTournament = (id, updates) => ({
	type: "UPDATE_TOURNAMENT",
	id,
	updates,
});
