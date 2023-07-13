import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { adiFont } from './fonts'

export const metadata: Metadata = {
  title: "adidas Brasil Loja",
  description:
    "Na loja oficial da adidas Brasil, você vai encontrar tênis, roupas esportivas e material esportivo criados com tecnologaa e design. Clique aqui para comprar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={adiFont.className}>{children}</body>
    </html>
  )
}
