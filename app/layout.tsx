import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter, Dancing_Script, Permanent_Marker } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const dancing = Dancing_Script({ subsets: ['latin'], variable: '--font-dancing' })
const permanent = Permanent_Marker({ subsets: ['latin'], weight: '400', variable: '--font-permanent' });

export const metadata = {
  title: 'SYNAPSESASS',
  description: 'My own SaSS app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${permanent.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
