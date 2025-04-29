import type { Metadata } from "next";
import "./globals.css";import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Education Platform",
  description: "Nền tảng học tập trực tuyến",
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
      {children}
      </body>
    </html>
  );
}
