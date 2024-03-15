'use client'

import { FunctionComponent } from 'react'
import { Link, usePathname } from '../../navigation'
import { LanguagesIcon } from 'lucide-react'
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
      <DropdownMenuTrigger className="flex gap-2 items-center tracking-wider text-sm">
        <LanguagesIcon size={16} /> {langNames[selectedLang]}
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
            <LanguagesIcon size={16} />
            English
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href={pathname}
            locale="pt"
            className=" flex gap-2 items-center tracking-wider"
          >
            <LanguagesIcon size={16} />
            Português
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ToggleLang
