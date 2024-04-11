import { useTranslations } from 'next-intl'
import { FunctionComponent } from 'react'

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  const about = useTranslations('about')

  return (
    <div className="flex flex-col gap-8">
      <h1 className="pb-4 border-b text-xl border-neutral-300 dark:border-neutral-800">
        {about('title')}
      </h1>

      <div>
        <span className=" font-medium">🙋‍♂️{about('myname')}</span>
        <article className="mt-4 text-sm text-justify">
          {about('presentation')}
        </article>
      </div>

      <div className="mt-4">
        <span className=" font-medium">{about('educationTitle')}</span>
        <article className="mt-2 text-sm text-justify">
          {about('educationText')}
        </article>
      </div>

      <div className="mt-4">
        <span className=" font-medium">{about('worksTitle')}</span>
        <li className="mt-2 text-sm text-justify">{about('freelancerText')}</li>
        <li className="mt-2 text-sm text-justify">{about('btorText')}</li>
        <li className="mt-2 text-sm text-justify">{about('timeAlign')}</li>
      </div>
    </div>
  )
}

export default About
