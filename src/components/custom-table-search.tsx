"use client";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function CustomTableSearch({ target, page, rowsPerPage }: any) {
	const router = useRouter();
	const [query, setQuery] = useState("");
	const [value] = useDebounce(query, 500);

	useEffect(() => {
		router.push(`/${target}?page=${page}&rowsPerPage=${rowsPerPage}&query=${value}`);
	}, [value]);

	return (
		<Input
			placeholder="Search..."
			value={query}
			onChange={(e: any) => setQuery(e.target.value)}
			className="max-w-sm"
		/>
	);
}
