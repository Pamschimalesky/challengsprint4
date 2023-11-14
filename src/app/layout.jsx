import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Porto Seguro - Seguro de bike',
  description: '1TDSPM - Entrega Challenge 4 Sprint',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}</body>
    </html>
  )
}