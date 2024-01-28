import { Suspense } from 'react'
import { NavigationEvents } from '@/components/navigation-events' 

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          {children}

          <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>
        </body>
      </html>
    )
  }