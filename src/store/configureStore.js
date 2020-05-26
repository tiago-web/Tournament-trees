import { createStore, combineReducers } from "redux";
import teamsReducer from "../reducers/teams";
import matchesReduces from "../reducers/matches";

export default () => {
	const store = createStore(
		combineReducers({
			teams: teamsReducer,
			matches: matchesReduces,
		})
	);

	return store;
};
