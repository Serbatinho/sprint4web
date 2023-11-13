import './globals.scss';

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sprint 4 Web',
  description: '4 entrega do Challenge, feita pelo grupo Proteção Pesada',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>

        <Header />

        {children}

        <Footer />

      </body>
    </html>
  )
}
