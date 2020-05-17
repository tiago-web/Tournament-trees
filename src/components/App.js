import React, { useState } from "react";
import Form from "./Form";
import Header from "./Header";

function App() {
	const [app, setApp] = useState({
		title: "Select the number of teams",
		hasNumOfTeams: false,
		numOfTeams: null,
	});

	function handleSubmit(e, numOfTeams) {
		console.log(app.title);
		setApp({ title: "Tournament keys", hasNumOfTeams: true, numOfTeams });

		e.preventDefault();
	}

	return (
		<div className="container">
			<Header title={app.title} />
			{!app.hasNumOfTeams && <Form handleSubmit={handleSubmit} />}
		</div>
	);
}

export default App;
