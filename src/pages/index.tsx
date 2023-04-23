import Image from 'next/image';
import { Inter } from 'next/font/google';
import Button from '~/components/button/Button';
import Section from '~/components/Section';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className="h-full">
			<Section title='Salut !'>
			</Section>
			<Section title='Services'>
			</Section>
		</main>
	);
}
