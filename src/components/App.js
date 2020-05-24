import React, { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import configureStore from "../store/configureStore";
import { addTeam, updateTeam } from "../actions/teams";
import { createMatch, updateMatch } from "../actions/matches";

// START STORE
const store = configureStore();

// CREATE TEAMS
const teamOne = store.dispatch(addTeam({ teamName: "FazeClan" }));
const teamTwo = store.dispatch(addTeam({ teamName: "painGaming" }));

// INITIALIZE MATCH
const matchOne = store.dispatch(
	createMatch({ teams: [teamOne.team.id, teamTwo.team.id] })
);

console.log(store.getState());

// UPDATE TEAMS (MATCH_ID)
store.dispatch(
	updateTeam(teamOne.team.id, {
		matchsId: [matchOne.match.id],
	})
);

store.dispatch(
	updateTeam(teamTwo.team.id, {
		matchsId: [matchOne.match.id],
	})
);

// UPDATE MATCH STATUS: "CONCLUDED", WINNER, AND LOSER
store.dispatch(
	updateMatch(matchOne.match.id, {
		status: "Concluded",
		winner: teamTwo.team.id,
		loser: teamOne.team.id,
	})
);

console.log(store.getState());

function App() {
	const [state, setState] = useState({
		title: "Select the number of teams",
		numOfTeams: 0,
	});

	function handleSubmit(e, numOfTeams) {
		setState({ title: "Tournament keys", numOfTeams });

		e.preventDefault();
	}

	return (
		<div className="container">
			<Header title={state.title} />
			{state.numOfTeams}
			{state.numOfTeams === 0 && <Form handleSubmit={handleSubmit} />}
		</div>
	);
}

export default App;
