import { Html, Head, Main, NextScript } from 'next/document';
import Header from '~/components/Header';

export default function Document() {
	return (
		<Html lang="fr">
			<Head>
				<title>Yacine Samba | Portfolio 2023</title>
				<meta name="description" content="Voici mon portfolio de l'année 2023" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.gstatic.com" />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;700;900&display=swap"
				/>
			</Head>
			<body>
				<Header />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
