import { createStore, combineReducers } from "redux";
import teamsReducer from "../reducers/teams";
import matchesReducer from "../reducers/matches";
import tournamentsReducer from "../reducers/tournaments";

export default () => {
	const store = createStore(
		combineReducers({
			teams: teamsReducer,
			matches: matchesReducer,
			tournaments: tournamentsReducer,
		})
	);

	return store;
};
