import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { userAgent } from 'next/server'
import { headers } from 'next/headers'
import ResponsiveMenu from '@/components/ResponsiveMenu'
import { ScrollArea } from '@/components/ui/scroll-area'

const inter = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Glauber Monteiro',
  description: '@devglauber',
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const ua = userAgent({ headers: headers() })
  const viewport = ua.device.type === 'mobile' ? 'mobile' : 'desktop'
  const messages = useMessages()
  return (
    <html lang={locale}>
      <body className={cn(inter.className, 'flex h-screen flex-col')}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {viewport == 'mobile' ? (
            <>
              <ResponsiveMenu>
                <Sidebar />
              </ResponsiveMenu>
              <div className="p-4">{children}</div>
            </>
          ) : (
            <div className="grid grid-cols-[22rem_1fr] h-full">
              <Sidebar />
              <ScrollArea className="flex flex-col h-[calc(100vh-11rem)] overflow-y-auto m-4 md:m-10 sm:pr-4">
                {children}
              </ScrollArea>
            </div>
          )}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
