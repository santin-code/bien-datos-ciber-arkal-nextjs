import type { Metadata } from 'next'
import { Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Ciber Arkal',
  description: 'Accesos directos para el ciber arkal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
