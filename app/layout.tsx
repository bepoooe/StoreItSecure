import type { Metadata, Viewport } from "next";
import { Poppins } from 'next/font/google'

import "./globals.css";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: "StoreItSecure",
  description: "StoreItSecure - The most secure storage solution you need.",
  icons: {
    icon: [
      {
        url: "/assets/icons/logo-brand-blue.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
      {
        url: "/assets/icons/logo-brand-blue.svg",
        type: "image/svg+xml", 
        sizes: "16x16",
      },
      {
        url: "/assets/icons/logo-brand-blue.svg",
        type: "image/svg+xml",
        sizes: "32x32", 
      },
      {
        url: "/assets/icons/logo-brand-blue.svg",
        type: "image/svg+xml",
        sizes: "48x48",
      }
    ],
    apple: [
      {
        url: "/assets/icons/logo-brand-blue.svg",
        type: "image/svg+xml",
        sizes: "180x180",
      }
    ],
    other: [
      {
        rel: "icon",
        url: "/assets/icons/logo-brand-blue.svg", 
        type: "image/svg+xml",
        sizes: "any",
      },
      {
        rel: "shortcut icon",
        url: "/assets/icons/logo-brand-blue.svg",
        type: "image/svg+xml",
      }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/icons/logo-brand-blue.svg" />
        <link rel="icon" type="image/svg+xml" href="/assets/icons/logo-brand-blue.svg" sizes="16x16" />
        <link rel="icon" type="image/svg+xml" href="/assets/icons/logo-brand-blue.svg" sizes="32x32" />
        <link rel="icon" type="image/svg+xml" href="/assets/icons/logo-brand-blue.svg" sizes="48x48" />
        <link rel="apple-touch-icon" href="/assets/icons/logo-brand-blue.svg" />
        <link rel="shortcut icon" href="/assets/icons/logo-brand-blue.svg" />
      </head>
      <body
        className={`${poppins.variable} font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
