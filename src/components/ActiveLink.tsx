'use client'

import { cn } from '@/lib/utils'
import { ElementType, FunctionComponent } from 'react'
import { Link, usePathname } from '../../navigation'

interface ActiveLinkProps {
  name: string
  href: string
  icon: ElementType
}

const ActiveLink: FunctionComponent<ActiveLinkProps> = ({
  name,
  href,
  icon: Icon,
}) => {
  const pathname = usePathname()
  const isActive = pathname === href.toString()

  console.log(pathname)

  return (
    <Link
      href={href}
      className={cn(
        isActive ? 'bg-violet-600' : '',
        'flex items-center gap-2 px-4 py-2 rounded-md font-medium',
      )}
    >
      <Icon size={16} />
      {name}
    </Link>
  )
}

export default ActiveLink
