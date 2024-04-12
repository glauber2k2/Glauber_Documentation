import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { LuMenu } from 'react-icons/lu'
import React, { FunctionComponent, ReactNode } from 'react'

interface ResponsiveMenuProps {
  children: ReactNode
}

const ResponsiveMenu: FunctionComponent<ResponsiveMenuProps> = ({
  children,
}) => {
  return (
    <Sheet>
      <SheetTrigger className="m-6 w-fit">
        <LuMenu />
      </SheetTrigger>
      <SheetContent side={'left'}>{children}</SheetContent>
    </Sheet>
  )
}

export default ResponsiveMenu
