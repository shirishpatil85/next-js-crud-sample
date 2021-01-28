import Head from "next/head";
import Link from "next/link"

export function Layout({ children }) {
	return (
		<main className="layout">
			<Head>
				<title>NextJS Sample App</title>
			</Head>
			<div className="navbar">
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/searchPage">
					<a >Employee Search</a>
				</Link>
			</div>
			{children}
		</main>
	);
}
