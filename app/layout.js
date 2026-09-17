import './globals.css'

export const metadata = {
  title: 'Prosperty Real Estate Advisors — Research-based Property Advisory Services in Chennai',
  description: 'Prosperty Real Estate Advisors – research-based property buying, selling and investment advisory services across Chennai. 15+ years of trusted expertise.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
