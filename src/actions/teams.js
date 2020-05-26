import { v4 as uuidv4 } from "uuid";

// Teams actions

// CREATE_TEAM
export const createTeam = ({ teamName = "", matchsId = [] } = {}) => ({
	type: "CREATE_TEAM",
	team: {
		id: uuidv4(), // uuid
		teamName,
		matchsId,
	},
});

// REMOVE_TEAM
export const removeTeam = id => ({
	type: "REMOVE_TEAM",
	id,
});

// UPDATE_TEAM
export const updateTeam = (id, updates) => ({
	type: "UPDATE_TEAM",
	id,
	updates,
});
// Later, I will assign a match in here, so I can keep track if the team has played each match.
