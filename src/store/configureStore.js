import { createStore, combineReducers } from "redux";
import teamsReducer from "../reducer/teams";
import matchesReduces from "../reducer/matches";

export default () => {
	const store = createStore(
		combineReducers({
			teams: teamsReducer,
			matches: matchesReduces,
		})
	);

	return store;
};
