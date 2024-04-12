import React, { ReactNode } from 'react'
import Sidebar from '@/components/Sidebar'
import { userAgent } from 'next/server'
import { headers } from 'next/headers'
import ResponsiveMenu from '@/components/ResponsiveMenu'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function LayoutSessions({ children }: { children: ReactNode }) {
  const ua = userAgent({ headers: headers() })
  const viewport = ua.device.type === 'mobile' ? 'mobile' : 'desktop'

  if (viewport == 'mobile') {
    return (
      <>
        <ResponsiveMenu>
          <Sidebar />
        </ResponsiveMenu>
        <div className="p-4">{children}</div>
      </>
    )
  }

  return (
    <div className="grid grid-cols-[22rem_1fr] h-full">
      <Sidebar />
      <ScrollArea className="flex flex-col h-[calc(100vh-11rem)] overflow-y-auto m-4 md:m-10 sm:pr-4">
        {children}
      </ScrollArea>
    </div>
  )
}
