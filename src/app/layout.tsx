import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajan Pantha | Full Stack Developer",
  description:
    "Portfolio of Rajan Pantha — Full Stack Developer building modern, performant web applications with clean design and exceptional user experience.",
  keywords: [
    "developer",
    "portfolio",
    "react",
    "nextjs",
    "full stack",
    "web developer",
  ],
  authors: [{ name: "Rajan Pantha" }],
  openGraph: {
    title: "Rajan Pantha | Full Stack Developer",
    description:
      "Portfolio of Rajan Pantha — Full Stack Developer building modern, performant web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
