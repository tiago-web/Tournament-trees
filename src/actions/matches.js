import { v4 as uuidv4 } from "uuid";

// CREATE_MATCH
export const createMatch = ({
	teams = [],
	status = "Match in progress",
	winner = "",
	loser = "",
} = {}) => ({
	type: "CREATE_MATCH",
	match: {
		id: uuidv4(),
		teams,
		status,
		winner,
		loser,
	},
});

// REMOVE_MATCH
export const removeMatch = id => ({
	type: "REMOVE_MATCH",
	id,
});

// UPDATE_MATCH
export const updateMatch = (id, updates) => ({
	type: "UPDATE_MATCH",
	id,
	updates,
});
