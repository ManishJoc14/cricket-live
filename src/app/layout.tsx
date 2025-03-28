import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: {
    default: "CricketLive - Watch Cricket Matches Live",
    template: "%s | CricketLive",
  },
  description:
    "Watch live cricket matches online free with high-quality streaming. Catch IPL, World Cup, and international cricket matches live free.",
  keywords: ["cricket", "free", "live cricket", "cricket streaming", "watch cricket online", "IPL live", "cricket match"],
  authors: [{ name: "Manish" }],
  creator: "Manish",
  publisher: "CricketLive",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "sports",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "CricketLive - Watch Cricket Matches Live Free",
    description:
      "Watch live cricket matches online with high-quality streaming. Catch IPL, World Cup, and international cricket matches live.",
    siteName: "CricketLive",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "CricketLive - Watch Cricket Matches Live Free",
    description:
      "Watch live cricket matches online with high-quality streaming. Catch IPL, World Cup, and international cricket matches live.",
    creator: "@cricketlive",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="//stream.crichd.sc" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsEvent",
              name: "Live Cricket Match",
              description: "Watch live cricket matches online with high-quality streaming",
              startDate: new Date().toISOString(),
              endDate: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(),
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}

