import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anurag Munda - Design × Code",
  description:
    "Portfolio of Anurag Munda, a design-minded engineer crafting digital experiences.",
  openGraph: {
    title: "Anurag Munda - Portfolio",
    description: "Crafting digital experiences that feel alive.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
