import { FunctionComponent } from 'react'
import { useTranslations } from 'next-intl'
import { Progress } from '@/components/ui/progress'

interface TechProps {}

const Tech: FunctionComponent<TechProps> = () => {
  const techs = useTranslations('techs')

  return (
    <div className="flex flex-col gap-8">
      <h1 className="pb-4 border-b text-xl border-neutral-300 dark:border-neutral-800">
        {techs('title')}
      </h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 md:p-10 border rounded-lg border-neutral-300 dark:border-neutral-800 space-y-8">
          <span className="flex items-center gap-2 text-xl">
            <img src="/nexticon.svg" className="w-10 h-10 dark:invert" />
            Next.js
          </span>
          <Progress value={90} />
        </div>
        <div className="p-4 md:p-10 border rounded-lg border-neutral-300 dark:border-neutral-800 space-y-8">
          <span className="flex items-center gap-2 text-xl">
            <img src="/reacticon.svg" className="w-10 h-10 dark:invert" />
            React.js
          </span>
          <Progress value={90} />
        </div>
        <div className="p-4 md:p-10 border rounded-lg border-neutral-300 dark:border-neutral-800 space-y-8">
          <span className="flex items-center gap-2 text-xl">
            <img src="/tailwindicon.svg" className="w-10 h-10 dark:invert" />
            Tailwind
          </span>
          <Progress value={100} />
        </div>
        <div className="p-4 md:p-10 border rounded-lg border-neutral-300 dark:border-neutral-800 space-y-8">
          <span className="flex items-center gap-2 text-xl">
            <img src="/nodeicon.svg" className="w-10 h-10 dark:invert" />
            Node.js
          </span>
          <Progress value={60} />
        </div>
        <div className="p-4 md:p-10 border rounded-lg border-neutral-300 dark:border-neutral-800 space-y-8">
          <span className="flex items-center gap-2 text-xl">
            <img src="/expressicon.svg" className="w-10 h-10 dark:invert" />
            Express
          </span>
          <Progress value={40} />
        </div>
        <div className="p-4 md:p-10 border rounded-lg border-neutral-300 dark:border-neutral-800 space-y-8">
          <span className="flex items-center gap-2 text-xl">
            <img src="/fluttericon.svg" className="w-10 h-10 dark:invert" />
            Flutter
          </span>
          <Progress value={50} />
        </div>
        <div className="p-4 md:p-10 border rounded-lg border-neutral-300 dark:border-neutral-800 space-y-8">
          <span className="flex items-center gap-2 text-xl">
            <img src="/angularicon.svg" className="w-10 h-10 dark:invert" />
            Angular
          </span>
          <Progress value={40} />
        </div>
        <div className="p-4 md:p-10 border rounded-lg border-neutral-300 dark:border-neutral-800 space-y-8">
          <span className="flex items-center gap-2 text-xl">
            <img src="/reacticon.svg" className="w-10 h-10 dark:invert" />
            React Native
          </span>
          <Progress value={20} />
        </div>
        <div className="p-4 md:p-10 border rounded-lg border-neutral-300 dark:border-neutral-800 space-y-8">
          <span className="flex items-center gap-2 text-xl">
            <img src="/laravelicon.svg" className="w-10 h-10 dark:invert" />
            Laravel
          </span>
          <Progress value={20} />
        </div>
      </div>
    </div>
  )
}

export default Tech
