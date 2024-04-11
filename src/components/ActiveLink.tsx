'use client'

import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from 'react'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'
import { Link } from '../../navigation'

interface ActiveLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href: string
  children: ReactNode
}

const ActiveLink: FunctionComponent<ActiveLinkProps> = ({ children, href }) => {
  const pathname = usePathname()
  const isActive = pathname === href.toString()

  console.log(pathname)

  return (
    <Link href={href} className="">
      <Button
        variant={'ghost'}
        className={cn(
          isActive ? 'bg-white/5' : '',
          'flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm w-full justify-start',
        )}
      >
        {children}
      </Button>
    </Link>
  )
}

export default ActiveLink
