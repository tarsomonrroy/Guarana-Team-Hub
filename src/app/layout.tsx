import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Guaraná Team Hub",
  description: "Official page and hub of the Guaraná Team translation group. Your trusted source for Plants vs Zombies: Fusion downloads, updates, and community support with exclusive translations and improvements.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    images: [
      {
        url: "/PvZFusion.png", // ← IMAGEM LOCAL!
        width: 1200,
        height: 630,
        alt: "Plants vs Zombies: Fusion - Guaraná Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/PvZFusion.png"], // ← IMAGEM LOCAL!
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
