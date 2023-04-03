import './globals.scss'

export const metadata = {
  title: 'Cyber Security | School Project',
  description: 'Welcome to our site! We are students at Noroff, and we have made this educational website on topics of cyber security.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
