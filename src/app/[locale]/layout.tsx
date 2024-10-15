import type { Metadata } from 'next';

import './globals.css';
import Sidebar from '@/components/Sidebar/Sidebar';
import { DriftPlugin } from '@/components/core';

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {


  return (
    <html lang={locale} className="h-full">
      <body
        className={`h-full m-0 bg-gray-100 antialiased`}
      >

        <div className="flex flex-col lg:flex-row h-full">
          <Sidebar />
          <main className="flex-1 bg-gray-50 p-4 overflow-y-auto lg:pl-[50px] lg:pr-[50px]">
            {children}
          </main>
          <DriftPlugin />
        </div>
      </body>
    </html>
  );
}
