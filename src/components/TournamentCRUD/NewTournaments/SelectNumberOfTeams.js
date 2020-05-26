import React, { useState } from "react";

// Select Number of Teams
export default props => {
	const [numOfTeams, setNumOfTeams] = useState(2);

	return (
		<div>
			<form onSubmit={e => props.submitTeamsNumber(e, numOfTeams)}>
				<select onChange={e => setNumOfTeams(parseInt(e.target.value))}>
					<option value={2}>2</option>
					<option value={4}>4</option>
					<option value={8}>8</option>
				</select>

				<input type="submit" value="Confirm" />
			</form>
		</div>
	);
};
