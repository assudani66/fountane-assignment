"use client"
import './globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast';
const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
      <Toaster/>
        </body>
    </html>
  )
}
