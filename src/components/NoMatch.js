import React from "react";
import { useLocation } from "react-router-dom";

// Not Match page
export default () => {
	const location = useLocation();

	return (
		<div>
			<h1>404</h1>
			<p>
				Match not found for <code>{location.pathname}</code>
			</p>
		</div>
	);
};
