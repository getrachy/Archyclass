import './globals.css'

export const metadata = {
  title: 'ArchyClass',
  description: 'No Zero Days',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
