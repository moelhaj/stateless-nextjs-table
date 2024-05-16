"use client";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	DoubleArrowLeftIcon,
	DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useRouter } from "next/navigation";

export default function Pagination({
	count,
	page,
	rowsPerPage,
	query,
}: {
	count: number;
	page: number;
	rowsPerPage: number;
	query: string;
}) {
	const router = useRouter();
	function navigate(page: number, rowsPerPage: number) {
		router.push(`/hospitals?page=${page}&rowsPerPage=${rowsPerPage}&query=${query}`);
	}

	return (
		<div className="flex items-center justify-between px-2">
			<div className="flex-1 text-sm text-muted-foreground"></div>
			<div className="flex items-center space-x-6 lg:space-x-8">
				<div className="flex items-center space-x-2">
					<p className="text-sm font-medium">Rows per page</p>
					<Select
						value={rowsPerPage.toString()}
						onValueChange={value => {
							navigate(page, parseInt(value, 10));
						}}
					>
						<SelectTrigger className="h-8 w-[70px] bg-white">
							<SelectValue placeholder={rowsPerPage.toString()} />
						</SelectTrigger>
						<SelectContent side="top" className="bg-white">
							{[5, 10, 20, 30, 40, 50, 100].map(pageSize => (
								<SelectItem key={pageSize} value={`${pageSize}`}>
									{pageSize}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<div className="flex w-[100px] items-center justify-center text-sm font-medium">
					Page {page} of {Math.ceil(count / rowsPerPage)}
				</div>
				<div className="flex items-center space-x-2">
					<Button
						variant="outline"
						className="hidden h-8 w-8 p-0 lg:flex bg-white"
						onClick={() => navigate(1, rowsPerPage)}
						disabled={page === 1}
					>
						<span className="sr-only">Go to first page</span>
						<DoubleArrowLeftIcon className="h-4 w-4" />
					</Button>
					<Button
						variant="outline"
						className="h-8 w-8 p-0 bg-white"
						onClick={() => navigate(page - 1, rowsPerPage)}
						disabled={page === 1}
					>
						<span className="sr-only">Go to previous page</span>
						<ChevronLeftIcon className="h-4 w-4" />
					</Button>
					<Button
						variant="outline"
						className="h-8 w-8 p-0 bg-white"
						onClick={() => navigate(page + 1, rowsPerPage)}
						disabled={page === Math.ceil(count / rowsPerPage)}
					>
						<span className="sr-only">Go to next page</span>
						<ChevronRightIcon className="h-4 w-4" />
					</Button>
					<Button
						variant="outline"
						className="hidden h-8 w-8 p-0 lg:flex bg-white"
						onClick={() => navigate(Math.ceil(count / rowsPerPage), rowsPerPage)}
						disabled={page === Math.ceil(count / rowsPerPage)}
					>
						<span className="sr-only">Go to last page</span>
						<DoubleArrowRightIcon className="h-4 w-4" />
					</Button>
				</div>
			</div>
		</div>
	);
}
