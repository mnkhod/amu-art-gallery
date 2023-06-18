import './globals.css'
import { Marcellus } from 'next/font/google'

const inter = Marcellus({ weight: "400", subsets: ['latin'] })

export const metadata = {
  title: 'amu art gallery',
  description: 'mnkhod amu gallery',
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
