import { Suspense } from "react";
import { getData } from "@/actions/hospitals";
import Table from "@/components/custom-table";

type SearchParams = {
	query?: string;
	page?: string;
	rowsPerPage?: string;
};

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
	const page = parseInt(searchParams?.page || "1", 10);
	const rowsPerPage = parseInt(searchParams?.rowsPerPage || "5", 10);
	const query = searchParams?.query || "";

	const data = await getData(page, rowsPerPage, query);
	const columns = ["Name", "Location"];

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className="p-6">
				<Table
					data={data}
					columns={columns}
					page={page}
					query={query}
					rowsPerPage={rowsPerPage}
					target="hospitals"
				/>
			</div>
		</Suspense>
	);
}
