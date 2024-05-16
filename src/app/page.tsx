import Link from "next/link";

export default async function Home() {
	return (
		<div>
			<Link href="/hospitals">go to hospitals</Link>
		</div>
	);
}
