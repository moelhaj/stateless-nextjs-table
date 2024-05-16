import CustomTableSearch from "./custom-table-search";
import Pagination from "./pagination";

export default function CustomTable({ data, columns, page, rowsPerPage, query, target }: any) {
	return (
		<div className="w-full">
			<div className="flex items-center py-4">
				<CustomTableSearch target={target} page={page} rowsPerPage={rowsPerPage} />
			</div>
			<div className="border rounded-md bg-white w-full overflow-hidden overflow-x-scroll">
				<table className="text-sm w-full border-collapse">
					<thead>
						<tr className="text-left border-b">
							{columns.map((column: any) => (
								<th key={column} className="font-medium py-2 px-4">
									{column}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{data.hospitals.map((item: any) => (
							<tr key={item.id} className="border-b last:border-b-0">
								{columns.map((column: any) => (
									<td key={column} className="py-2 px-4">
										{item[column.toLowerCase()]}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="pt-6">
				<Pagination
					count={data?.count}
					page={page}
					rowsPerPage={rowsPerPage}
					query={query}
				/>
			</div>
		</div>
	);
}
