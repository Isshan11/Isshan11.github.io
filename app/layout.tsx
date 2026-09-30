import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://isshan11.github.io'),
  title: 'Isshan Marwah — Portfolio',
  description: 'Portfolio of Isshan Marwah, an Ontario Tech University student working across programming, automation, 3D art, interactive projects, and technical tools.',
  openGraph: {
    title: 'Isshan Marwah — Portfolio',
    description: 'Programming, automation, 3D art, interactive projects, and technical tools.',
    images: [{
      url: '/og.png',
      width: 1200,
      height: 630,
      alt: 'Isshan Marwah — Creative and Technical Portfolio',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isshan Marwah — Portfolio',
    description: 'Programming, automation, 3D art, interactive projects, and technical tools.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
