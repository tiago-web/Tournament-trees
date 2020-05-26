import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createTournament } from "../../actions/tournaments";

import SelectNumberOfTeams from "./NewTournaments/SelectNumberOfTeams";
import InputTeamNames from "./NewTournaments/InputTeamNames";
import SetRandomWinner from "./NewTournaments/SetRandomWinner";
import CofirmTournamentCreation from "./NewTournaments/CofirmTournamentCreation";
import { useHistory } from "react-router-dom";

// Create Tournament Dashboard
export default () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [state, setState] = useState({
		title: "Tournament Title Here",
		numOfTeams: 0,
		teamNames: [],
		isRandomTournament: false,
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
			setState(prevState => ({ ...prevState, isRandomTournament: true }));
		} else {
			setState(prevState => ({ ...prevState, isRandomTournament: false }));
		}

		// Set renderConfirmationPage to true
		setState(prevState => ({ ...prevState, renderConfirmationPage: true }));
	};

	const handleCreateTournament = value => {
		if (value === "confirm") {
			dispatch(
				createTournament({
					isRandomTournament: state.isRandomTournament,
					title: state.title,
					numOfTeams: state.numOfTeams,
					teamNames: state.teamNames,
				})
			);
			history.push("/");
		} else {
			history.push("/");
		}
	};

	const displayComponents = () => {
		if (state.numOfTeams === 0) {
			return <SelectNumberOfTeams handleTeamsNumber={handleTeamsNumber} />;
		} else if (state.numOfTeams !== 0 && state.teamNames.length === 0) {
			return (
				<InputTeamNames
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
			<input
				className="tournament-title"
				autoFocus={true}
				type="text"
				value={state.title}
				onChange={e => {
					const { value } = e.target;

					setState(prevState => ({ ...prevState, title: value }));
				}}
			/>
			{displayComponents()}
		</div>
	);
};
