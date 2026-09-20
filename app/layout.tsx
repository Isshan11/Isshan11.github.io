import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://isshan11.github.io'),
  title: 'Isshan Marwah — Technical Artist & Game Developer',
  description: 'Technical artist and game developer building Unreal Engine gameplay systems, procedural tools, and game-ready 3D worlds.',
  openGraph: {
    title: 'Isshan Marwah — Technical Artist & Game Developer',
    description: 'Unreal Engine gameplay systems, procedural tools, and game-ready 3D worlds.',
    images: [{
      url: '/og.png',
      width: 1200,
      height: 630,
      alt: 'Isshan Marwah — Technical Art • Game Development',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isshan Marwah — Technical Artist & Game Developer',
    description: 'Unreal Engine gameplay systems, procedural tools, and game-ready 3D worlds.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
