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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
