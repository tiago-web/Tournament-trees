import React from "react";
import UpdateTournament from "./TournamentCRUD/UpdateTournament";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Display Tournaments Page
export default () => {
	const tournaments = useSelector(state => state.tournaments);

	return (
		<div>
			<h1>DisplayTournaments</h1>
			{tournaments.map(tournament => (
				<div>
					<h2>{tournament.title}</h2>
					<p>{tournament.teamNames}</p>
				</div>
			))}
			{/* <Link>
				<UpdateTournament id="Tournament_ID" />
			</Link> */}
		</div>
	);
};
