'use client'

import { FunctionComponent } from 'react'
import { Link, usePathname } from '../../navigation'
import { LuLanguages } from 'react-icons/lu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { usePathname as nextPathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Button } from './ui/button'

interface ToggleLangProps {}

const ToggleLang: FunctionComponent<ToggleLangProps> = () => {
  const pathname = usePathname()
  const selectedLang = nextPathname().split('/')[1]
  const langNames: { [key: string]: string } = {
    pt: 'Português',
    en: 'English',
  }
  const t = useTranslations('toggleLang')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex gap-2 items-center tracking-wider text-sm"
        asChild
      >
        <Button variant={'outline'}>
          <LuLanguages size={16} />
          <p className="hidden sm:block">{langNames[selectedLang]}</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{t('title')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            href={pathname}
            locale="en"
            className=" flex gap-2 items-center tracking-wider"
          >
            <LuLanguages size={16} />
            English
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href={pathname}
            locale="pt"
            className=" flex gap-2 items-center tracking-wider"
          >
            <LuLanguages size={16} />
            Português
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ToggleLang
