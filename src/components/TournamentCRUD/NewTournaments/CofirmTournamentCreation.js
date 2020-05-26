import React from "react";

// Confirm Tournament Creation Page
export default props => {
	return (
		<div>
			<h2>Create Tournament</h2>

			<button
				className="btn"
				value="confirm"
				onClick={e => props.handleCreateTournament(e.target.value)}
			>
				Confirm
			</button>
			{/* This is a temporary <div> */}
			<div style={{ height: "10px" }}></div>
			{/* This is a temporary <div> */}
			<button
				className="btn"
				value="cancel"
				onClick={e => props.handleCreateTournament(e.target.value)}
			>
				Cancel
			</button>
		</div>
	);
};
