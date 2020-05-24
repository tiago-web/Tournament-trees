import React from "react";
import UpdateTournament from "./TournamentCRUD/UpdateTournament";
import { Link } from "react-router-dom";

// Display Tournaments Page
export default () => {
	return (
		<div>
			<h1>DisplayTournaments</h1>
			<Link>
				<UpdateTournament id="Tournament_ID" />
			</Link>
		</div>
	);
};
