import React from "react";

// Set a Random Winner
export default props => {
	return (
		<div>
			<h2>Do you want to set a random winner?</h2>
			<button
				className="btn"
				value="yes"
				onClick={e => props.handleRandomWinner(e.target.value)}
			>
				Yes
			</button>
			{/* This <div> is just for now */}
			<div style={{ height: "10px" }}></div>
			{/* This is a temporary <div> */}
			<button
				className="btn"
				value="no"
				onClick={e => props.handleRandomWinner(e.target.value)}
			>
				No
			</button>
		</div>
	);
};
