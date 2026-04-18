import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Bala | Portfolio',
  description: 'Focused portfolio for a full stack software engineer and SDET.'
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
