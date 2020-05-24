import React from "react";
import { NavLink } from "react-router-dom";

// Header Page
export default () => {
	return (
		<header>
			<h1>Tournament Trees App</h1>
			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/create-tournament">New Tournament</NavLink>
					</li>
					<li>
						<NavLink to="/display-tournaments">Check Tournaments</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
