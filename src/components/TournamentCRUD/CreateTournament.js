import React, { useState } from "react";
import SelectNumberOfTeams from "./NewTournaments/SelectNumberOfTeams";
import InputTeamsNames from "./NewTournaments/InputTeamsNames";

// Create Tournament Dashboard
export default () => {
	const [state, setState] = useState({
		numOfTeams: 0,
		teamNames: [],
	});

	const submitTeamsNumber = (e, numOfTeams) => {
		setState(prevState => ({ ...prevState, numOfTeams }));

		e.preventDefault();
	};

	const submitTeamsNames = (e, teamNames) => {
		const values = Object.values(teamNames);
		setState(prevState => ({ ...prevState, teamNames: values }));

		e.preventDefault();
	};

	return (
		<div>
			{alert(
				"Ask if the user wants the program to generate a random winner for the tournament"
			)}
			<h1>Create Tournament Dashboard</h1>
			{state.numOfTeams === 0 && (
				<SelectNumberOfTeams submitTeamsNumber={submitTeamsNumber} />
			)}
			{state.numOfTeams !== 0 && state.teamNames.length === 0 && (
				<div>
					<h3>Please, provide a name for each team.</h3>
					<InputTeamsNames
						numOfTeams={state.numOfTeams}
						submitTeamsNames={submitTeamsNames}
					/>
				</div>
			)}
		</div>
	);
};
