import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer"
import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import Head from "next/head";
import favicon from "./favicon.ico"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hapkido boxing national federation-haryana",
  description: "Hapkido Boxing International Organization is world governing Body with 47 Members Countries around the world. It is one of the largest and well- disciplined organization in the world.",
  icons: [{ rel: 'icon', url: favicon.src },{rel:'icon',url:'.circle-logo.png'}],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
     
      
      <body className={inter.className}>
      <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <Navbar/>
        {children}
      <Footer/>
      </NextThemesProvider>
    </NextUIProvider>
        </body>
        
    </html>
    
  );
}
