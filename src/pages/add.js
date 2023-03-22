import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function AddSnippet() {
	return (
		<Layout>
			<Head>
				<title>Snippy - Add</title>
			</Head>
			<h1>Add Snippet</h1>
			<Link href="/">Index</Link>
		</Layout>
	);
}
