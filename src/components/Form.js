import React, { useState } from "react";

const Form = props => {
	const [number, setNumber] = useState(2);

	return (
		<div>
			<form onSubmit={e => props.handleSubmit(e, number)}>
				<select onChange={e => setNumber(parseInt(e.target.value))}>
					<option value={2}>2</option>
					<option value={4}>4</option>
					<option value={8}>8</option>
				</select>

				<input type="submit" value="Confirm" />
			</form>
		</div>
	);
};

export default Form;
