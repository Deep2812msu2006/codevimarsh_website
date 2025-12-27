import './globals.css';
import { JetBrains_Mono } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Code Vimarsh - Tech Community',
  description: 'A community of passionate developers and tech enthusiasts',
};

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jetbrainsMono.variable} font-mono`}>
        <div className="code-rain"></div>
        <div className="grid-overlay"></div>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
