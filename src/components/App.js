import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import CreateTournament from "./TournamentCRUD/CreateTournament";
import NoMatch from "./NoMatch";
import DisplayTournaments from "./DisplayTournaments";

const App = () => {
	return (
		<Router>
			<div className="container">
				<Header />

				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/create-tournament">
						<CreateTournament />
					</Route>
					<Route path="/display-tournaments">
						<DisplayTournaments />
					</Route>
					<Route path="*">
						<NoMatch />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
