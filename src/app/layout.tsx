import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammad Shohan - Portfolio",
  description: "Portfolio of Mohammad Shohan - Competitive Programmer & Technology Enthusiast. Showcasing skills, projects, and achievements in computer science.",
  keywords: "Mohammad Shohan, portfolio, competitive programming, computer science, web development, IIUC",
  authors: [{ name: "Mohammad Shohan" }],
  creator: "Mohammad Shohan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohammad-shohan.vercel.app",
    title: "Mohammad Shohan - Portfolio",
    description: "Portfolio of Mohammad Shohan - Competitive Programmer & Technology Enthusiast",
    siteName: "Mohammad Shohan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Shohan - Portfolio",
    description: "Portfolio of Mohammad Shohan - Competitive Programmer & Technology Enthusiast",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
