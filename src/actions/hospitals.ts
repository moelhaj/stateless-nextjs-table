const hospitals = [
	{
		id: 1,
		name: "St. Mary's Hospital",
		location: "Nairobi",
	},
	{
		id: 2,
		name: "Kenyatta National Hospital",
		location: "Nairobi",
	},
	{
		id: 3,
		name: "Aga Khan Hospital",
		location: "Mombasa",
	},
	{
		id: 4,
		name: "Nairobi Hospital",
		location: "Nairobi",
	},
	{
		id: 5,
		name: "Mater Hospital",
		location: "Nairobi",
	},
	{
		id: 6,
		name: "Karen Hospital",
		location: "Nairobi",
	},
	{
		id: 7,
		name: "Nairobi West Hospital",
		location: "Nairobi",
	},
	{
		id: 8,
		name: "Coptic Hospital",
		location: "Nairobi",
	},
	{
		id: 9,
		name: "Avenue Hospital",
		location: "Nairobi",
	},
	{
		id: 10,
		name: "M.P. Shah Hospital",
		location: "Nairobi",
	},
];

export async function getData(page: number, rowsPerPage: number, query: string) {
	if (query && query !== "") {
		const searchResult = hospitals.filter((hospital: any) =>
			hospital.name.toLowerCase().includes(query.toLowerCase())
		);
		return {
			hospitals: searchResult.slice((page - 1) * rowsPerPage, page * rowsPerPage),
			count: searchResult.length,
		};
	} else {
		return {
			hospitals: hospitals.slice((page - 1) * rowsPerPage, page * rowsPerPage),
			count: hospitals.length,
		};
	}
}
