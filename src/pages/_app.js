import '@/styles/globals.css';
import { Noto_Sans } from 'next/font/google';

const noto_Sans = Noto_Sans({
	subsets: ['latin'],
	weight: ['400', '600', '900'],
});

export default function App({ Component, pageProps }) {
	return (
		<div className={noto_Sans.className}>
			<Component {...pageProps} />
		</div>
	);
}
