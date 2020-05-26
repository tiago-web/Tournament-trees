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
		// Prevent invalid inputs

		props.submitTeamsNames(e, names);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				{generateInputBoxes()}
				<input type="submit" value="Confirm" />
			</form>
		</div>
	);
};