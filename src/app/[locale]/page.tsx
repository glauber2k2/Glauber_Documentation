import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { Link as IntlLink } from '../../../navigation'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

export default function Home() {
  const home = useTranslations('home')
  return (
    <div className="flex flex-col items-center p-4 md:p-10 h-full justify-center">
      <h1 className="text-6xl font-bold">{home('title')}</h1>
      <div>
        <h2 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-1 text-xl text-white opacity-80">
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
