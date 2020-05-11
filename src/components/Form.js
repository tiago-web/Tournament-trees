import React, { useState } from "react";
// import Input from "./Input";

const Form = () => {
	const [hasTeamsNumber, setTeamsNumber] = useState(false);
	let [number, setNumber] = useState("");

	// For now, I'm assuming the user will input a valid number
	function handleSubmit(e) {
		number = parseInt(number);

		number > 0 && setTeamsNumber(true);

		e.preventDefault();
	}

	return (
		<div>
			{!hasTeamsNumber ? (
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						onChange={e => setNumber(e.target.value)}
						value={number}
						placeholder="Enter num of teams"
					/>
					<input type="submit" value="Click Me" />
				</form>
			) : (
				"false"
			)}
		</div>
	);
};

export default Form;
