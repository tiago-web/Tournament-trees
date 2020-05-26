import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

// import { getRandomWinner, getRowsAndColumns } from "./functions/matches";

// console.log(getRandomWinner("team1", "team2"));
// console.log(getRowsAndColumns(2));

const store = configureStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);
