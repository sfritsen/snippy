import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Snippy Code Management</title>
				<meta name="description" content="My Description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				Snippy
				<Link href="/add">Add Snippet</Link>
			</main>
		</Layout>
	);
}
