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
      },
      {
        url: "/favicon.svg", 
        type: "image/svg+xml",
      }
    ],
    apple: [
      {
        url: "/assets/icons/logo-brand-blue.svg",
        type: "image/svg+xml",
      }
    ],
    other: [
      {
        rel: "icon",
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
      <body
        className={`${poppins.variable} font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
