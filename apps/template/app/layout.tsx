import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Main repo",
  description: "Main repo description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
