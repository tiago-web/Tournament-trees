// This file will return a set of functions that can be used in a new match

export const getRowsAndColumns = numOfTeams => {
	const rowsAndColumns = {
		rows: numOfTeams * 2 - 1,
		cols: (Math.log(numOfTeams) / Math.log(2)) * 2 + 1,
	};

	return rowsAndColumns;
};
