import { FunctionComponent } from 'react'
import { useTranslations } from 'next-intl'
import ActiveLink from './ActiveLink'
import {
  LuCpu,
  LuLayoutList,
  LuMessageCircle,
  LuPresentation,
  LuUser2,
} from 'react-icons/lu'
import { GrDocumentUser } from 'react-icons/gr'

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  const t = useTranslations('sidebar')

  return (
    <div className="p-4 h-full border-r flex flex-col gap-1 border-neutral-300 dark:border-neutral-800">
      <ActiveLink href="/about">
        <LuUser2 size={16} />
        {t('about')}
      </ActiveLink>
      <ActiveLink href="/projects">
        <LuPresentation size={16} />
        {t('projects')}
      </ActiveLink>
      <ActiveLink href="/career">
        <LuLayoutList size={16} />
        {t('career')}
      </ActiveLink>
      <ActiveLink href="/tech">
        <LuCpu size={16} />
        {t('tech')}
      </ActiveLink>
      <ActiveLink href="/cv">
        <GrDocumentUser size={16} />

        {t('cv')}
      </ActiveLink>
      <span className="border-b border-neutral-300 dark:border-neutral-800 mt-auto mb-2" />
      <ActiveLink href="/contact">
        <LuMessageCircle size={16} />
        {t('contact')}
      </ActiveLink>
    </div>
  )
}

export default Sidebar
