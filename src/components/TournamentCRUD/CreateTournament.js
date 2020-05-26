import React, { useState } from "react";
import SelectNumberOfTeams from "./NewTournaments/SelectNumberOfTeams";
import InputTeamsNames from "./NewTournaments/InputTeamsNames";
import SetRandomWinner from "./NewTournaments/SetRandomWinner";
import CofirmTournamentCreation from "./NewTournaments/CofirmTournamentCreation";

// Create Tournament Dashboard
export default () => {
	const [state, setState] = useState({
		numOfTeams: 0,
		teamNames: [],
		generateRandomWinner: false,
		renderConfirmationPage: false,
	});

	const handleTeamsNumber = (e, numOfTeams) => {
		setState(prevState => ({ ...prevState, numOfTeams }));

		e.preventDefault();
	};

	const handleTeamsNames = (e, teamNames) => {
		const values = Object.values(teamNames);
		setState(prevState => ({ ...prevState, teamNames: values }));

		e.preventDefault();
	};

	const handleRandomWinner = value => {
		if (value === "yes") {
			setState(prevState => ({ ...prevState, generateRandomWinner: true }));
		} else {
			setState(prevState => ({ ...prevState, generateRandomWinner: false }));
		}

		// Set renderConfirmationPage to true
		setState(prevState => ({ ...prevState, renderConfirmationPage: true }));
	};

	const handleCreateTournament = value => {
		console.log(value);
	};

	const displayComponents = () => {
		if (state.numOfTeams === 0) {
			return <SelectNumberOfTeams handleTeamsNumber={handleTeamsNumber} />;
		} else if (state.numOfTeams !== 0 && state.teamNames.length === 0) {
			return (
				<InputTeamsNames
					numOfTeams={state.numOfTeams}
					handleTeamsNames={handleTeamsNames}
				/>
			);
		} else if (
			state.renderConfirmationPage !== true &&
			state.numOfTeams !== 0 &&
			state.teamNames.length !== 0
		) {
			return <SetRandomWinner handleRandomWinner={handleRandomWinner} />;
		} else {
			return (
				<CofirmTournamentCreation
					handleCreateTournament={handleCreateTournament}
				/>
			);
		}
	};

	return (
		<div>
			<h1>Create Tournament Dashboard</h1>
			{displayComponents()}
		</div>
	);
};
