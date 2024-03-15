import { useTranslations } from 'next-intl'
import { FunctionComponent } from 'react'

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  const t = useTranslations('about')

  return (
    <div className="p-12">
      <span className="text-4xl font-semibold tracking-widest">
        🙋‍♂️{t('myname')}
      </span>
      <article className="mt-10 border-l-4 pl-4 border-white text-pretty text-lg">
        {t('presentation')}
      </article>
    </div>
  )
}

export default About
