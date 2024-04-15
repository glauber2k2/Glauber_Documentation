import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { Link as IntlLink } from '../../../navigation'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import { LuArrowRight, LuLayoutDashboard } from 'react-icons/lu'

export default function Home() {
  const home = useTranslations('home')
  return (
    <div className="flex flex-col items-center p-4 md:p-10 h-full justify-center">
      <IntlLink href={'/projects'}>
        <Button
          variant={'secondary'}
          className="mb-6 text-xs md:text-sm h-6 px-2 md:h-7 md:px-3"
        >
          <LuLayoutDashboard className="mr-2 md:mr-4" />
          {home('projects')}
          <LuArrowRight />
        </Button>
      </IntlLink>
      <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold">
        {home('title')}
      </h1>
      <div>
        <h2 className="text-xs sm:text-base lg:text-xl animate-typing overflow-hidden whitespace-nowrap border-r-4 dark:border-r-white border-r-black pr-1  opacity-80">
          {home('subtitle')}
        </h2>
      </div>

      <span className="mt-10 gap-4 flex">
        <IntlLink href={'/about'}>
          <Button>{home('cta')}</Button>
        </IntlLink>
        <Link href={'https://github.com/glauber2k2'}>
          <Button variant={'outline'} className="flex gap-2">
            <FaGithub size={20} /> GitHub
          </Button>
        </Link>
      </span>
    </div>
  )
}
