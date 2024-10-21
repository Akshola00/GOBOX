"use client"
import localFont from "next/font/local";
import "./globals.css";

const queryClient = new QueryClient()


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

import {Inter} from 'next/font/google'
import { WagmiProvider } from "wagmi";
import { config } from "./config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { title } from "process";
import { Description } from "@radix-ui/react-dialog";

const inter = Inter({
  subsets: ['latin'], weight:['400', '500', '600', '700'], variable: '--font-inter'
})




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
        {children}
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
