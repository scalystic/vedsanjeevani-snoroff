import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const trajanPro = localFont({
  src: [
    {
      path: "../../public/fonts/TrajanPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/TrajanPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-trajan-pro",
});

const myriadPro = localFont({
  src: [
    {
      path: "../../public/fonts/MyriadPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/MyriadPro-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/MyriadPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-myriad-pro",
});

export const metadata: Metadata = {
  title: "Snore Off Nabhi Oil - Ved Sanjeevani",
  description: "Ancient Nabhi Therapy for better breathing, reduced snoring, and deep restful sleep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${trajanPro.variable} ${myriadPro.variable} h-full antialiased light`}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
