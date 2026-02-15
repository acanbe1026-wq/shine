// Import styles
import '@mantine/core/styles.css';
import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import ChannelService from "@/components/ChannelService";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "계약의 신 - 공인중개사 고객관리 ERP",
  description: "공인중개사 업무혁신 통합관리시스템 계약의 신",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider defaultColorScheme="dark">
          <ChannelService />
          {/* <Header /> */}
          <main className="min-h-screen bg-[#0a0a0a]">
            {children}
          </main>
          {/* <Footer /> */}
          <Analytics />
        </MantineProvider>
      </body>
    </html>
  );
}
