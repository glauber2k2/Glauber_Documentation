import { FunctionComponent } from 'react'
import { useTranslations } from 'next-intl'
import ActiveLink from './ActiveLink'
import { Cpu, MessageCircleIcon, Presentation, User2 } from 'lucide-react'

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  const t = useTranslations('sidebar')

  return (
    <div className="p-4 h-full border-r flex flex-col gap-1 border-neutral-300 dark:border-neutral-800">
      <ActiveLink href="/about">
        <User2 size={16} />
        {t('about')}
      </ActiveLink>
      <ActiveLink href="/tech">
        <Cpu size={16} />
        {t('tech')}
      </ActiveLink>
      <ActiveLink href="/projects">
        <Presentation size={16} />
        {t('projects')}
      </ActiveLink>
      <span className="border-b border-neutral-300 dark:border-neutral-800 mt-auto mb-2" />
      <ActiveLink href="/contact">
        <MessageCircleIcon size={16} />
        {t('contact')}
      </ActiveLink>
    </div>
  )
}

export default Sidebar
