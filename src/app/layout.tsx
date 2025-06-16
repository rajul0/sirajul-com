import type { Metadata } from "next";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import { metaData } from "./config";

import * as React from "react";
import { ThemeSwitch } from "../components/organisms/ThemeSwitch";
import { ThemeProvider } from "../providers/ThemeProvider";
import CustomCursor from "../components/organisms/CustomCursor";
import Navbar from "@/components/organisms/Navbar";
import HeaderBar from "@/components/molecules/HeaderBar";
import { PageTransitionLoader } from "@/components/molecules/PageTransitionLoader";
import { Toaster } from "sonner";
import { AOSProvider } from "@/providers/AOSProvider";
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl),
  title: {
    default: metaData.title,
    template: `%s | ${metaData.title}`,
  },
  description: metaData.description,
  openGraph: {
    images: metaData.ogImage,
    title: metaData.title,
    description: metaData.description,
    url: metaData.baseUrl,
    siteName: metaData.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: metaData.name,
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={workSans.variable} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        data-scroll-container
        className="antialiased font-sans scroll-smooth"
      >
        <PageTransitionLoader />
        <ThemeProvider defaultTheme="dark">
          <div className="hidden md:flex fixed p-0 top-3 md:top-3 right-5 z-50 btn-navbar dark:btn-navbar-dark pointer-events-auto">
            <ThemeSwitch />
          </div>
          <CustomCursor>
            <div className="md:hidden z-50 fixed w-full bg-black/10 dark:bg-black/30 backdrop-blur-sm shadow-lg border-b border-grey-100">
              <HeaderBar />
            </div>
            <div className="fixed z-50 bottom-4 w-3/5 lg:2/5 md:bottom-auto md:top-4 left-1/2 -translate-x-1/2 ">
              <Navbar />
            </div>
            <main className="w-full">
              <AOSProvider>{children}</AOSProvider>
            </main>
          </CustomCursor>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
