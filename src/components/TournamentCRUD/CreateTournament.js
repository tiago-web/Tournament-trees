import React, { useState } from "react";
import SelectNumberOfTeams from "./NewTournaments/SelectNumberOfTeams";
import InputTeamsNames from "./NewTournaments/InputTeamsNames";

// Create Tournament Dashboard
export default () => {
	const [state, setState] = useState({
		numOfTeams: 0,
		teamNames: [],
	});

	const inputBoxes = generateInputBoxes(state.numOfTeams);

	const submitTeamsNumber = (e, numOfTeams) => {
		setState({ numOfTeams });

		e.preventDefault();
	};

	const submitTeamsNames = (e, teamNames) => {
		const values = Object.values(teamNames);

		console.log(values);

		e.preventDefault();
	};

	return (
		<div>
			<h1>Create Tournament Dashboard</h1>
			{state.numOfTeams === 0 && (
				<SelectNumberOfTeams submitTeamsNumber={submitTeamsNumber} />
			)}
			{state.numOfTeams !== 0 && (
				<InputTeamsNames
					numOfTeams={state.numOfTeams}
					submitTeamsNames={submitTeamsNames}
				/>
			)}
		</div>
	);
};

const generateInputBoxes = numOfTeams => {
	const inputBoxes = [];

	for (let i = 0; i < numOfTeams; i++) {
		inputBoxes.push(
			<input
				key={i}
				type="text"
				name={"team_" + i}
				placeholder={"Team " + (i + 1)}
			/>
		);
	}

	return inputBoxes;
};

// {/* <div>
// 					<h3>Please, provide the Teams' names</h3>
// 					<form onSubmit={setTeamsNames}>
// 						{inputBoxes.map(input =>
// 							input.setAttribute("onchange", e => setState(e.target.value))
// 						)}
// 						<input type="submit" value="Confirm" />
// 					</form>
// 				</div> */}
