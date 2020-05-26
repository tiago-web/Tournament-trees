import React, { useState } from "react";

// Input Teams' names
export default props => {
	const inputBoxes = [];
	const [names, setNames] = useState({});

	const handleChange = e => {
		const { name, value } = e.target;

		setNames(prevState => ({ ...prevState, [name]: value }));
	};

	const generateInputBoxes = () => {
		for (let i = 0; i < props.numOfTeams; i++) {
			inputBoxes.push(
				<input
					key={i}
					type="text"
					name={"team" + i}
					placeholder={"Team " + (i + 1)}
					value={names.team}
					onChange={handleChange}
				/>
			);
		}

		return inputBoxes;
	};

	const handleSubmit = e => {
		// ADD a way to prevent invalid inputs

		props.handleTeamsNames(e, names);
	};

	return (
		<div>
			<h2>Provide a Name for Each Team</h2>

			<form onSubmit={handleSubmit}>
				{generateInputBoxes()}
				<input type="submit" value="Confirm" />
			</form>
		</div>
	);
};
