import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { useTranslations } from 'next-intl'
import { FunctionComponent } from 'react'
import { LuCalendar } from 'react-icons/lu'

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  const about = useTranslations('about')

  return (
    <div className="flex flex-col gap-8">
      <h1 className="pb-4 border-b text-xl border-neutral-300 dark:border-neutral-800 font-medium">
        {about('title')}
      </h1>

      <div>
        <span className=" font-medium">🙋‍♂️{about('myname')}</span>
        <article className="mt-4 text-xs sm:text-sm text-justify">
          {about('presentation')}
        </article>
      </div>

      <div className="mt-4 space-y-4">
        <span className=" font-medium">{about('educationTitle')}</span>
        <div className="flex flex-col pl-2 border-l-4">
          <h3 className="font-medium text-sm">Computer Science</h3>
          <small className=" text-xs">
            UNIPÊ - Centro Universitário de João Pessoa
          </small>
          <small className="mt-2 flex items-center gap-2">
            <LuCalendar />
            2020 - 2024
          </small>
        </div>

        <article className="text-xs sm:text-sm text-justify">
          {about('educationText')}
        </article>
      </div>

      <div className="mt-4">
        <span className=" font-medium">{about('languagesTitle')}</span>
        <div className="space-y-4 mt-4">
          <div className="font-medium text-sm">
            <span className="flex items-center gap-2">
              {about('portuguese')}
              <Badge className="text-xs">Nativo</Badge>
            </span>
            <Progress className="w-full md:w-1/2 h-2 mt-2" value={100} />
          </div>
          <div className="font-medium text-sm">
            {about('english')}
            <Progress className="w-full md:w-1/2 h-2 mt-2" value={50} />
          </div>
          <div className="font-medium text-sm">
            {about('spanish')}
            <Progress className="w-full md:w-1/2 h-2 mt-2" value={80} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
