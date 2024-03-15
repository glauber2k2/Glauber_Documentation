'use client'

import { FunctionComponent } from 'react'
import { useTranslations } from 'next-intl'
import ActiveLink from './ActiveLink'
import { Cpu, Home } from 'lucide-react'

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  const t = useTranslations('sidebar')

  return (
    <div className="p-4 h-full bg-zinc-900/30 ">
      <ActiveLink name={t('about')} href="/about" icon={Home} />
      <ActiveLink name={t('tech')} href="/tech" icon={Cpu} />
    </div>
  )
}

export default Sidebar
