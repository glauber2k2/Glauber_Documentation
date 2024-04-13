import { FunctionComponent } from 'react'
import { useTranslations } from 'next-intl'
import { Progress } from '@/components/ui/progress'

interface TechProps {}

const Tech: FunctionComponent<TechProps> = () => {
  const techs = useTranslations('techs')

  return (
    <div className="flex flex-col gap-8">
      <h1 className="pb-4 border-b text-xl border-neutral-300 dark:border-neutral-800 font-medium">
        {techs('title')}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-4 md:p-10 border rounded-lg border-neutral-300 dark:border-neutral-800 space-y-8 font-medium">
          <span className="flex items-center gap-2 text-sm md:text-xl">
            <img
              src="/nexticon.svg"
              className="w-6 h-6 md:w-10 md:h-10 dark:invert"
            />
            Next.js
          </span>
          <Progress className="h-2" value={90} />
        </div>
        <div className="p-4 md:p-10 border rounded-lg border-neutral-300 dark:border-neutral-800 space-y-8 font-medium">
          <span className="flex items-center gap-2 text-sm md:text-xl">
            <img
              src="/reacticon.svg"
              className="w-6 h-6 md:w-10 md:h-10 dark:invert"
            />
            React.js
          </span>
          <Progress className="h-2" value={90} />
        </div>
        <div className="p-4 md:p-10 border rounded-lg border-neutral-300 dark:border-neutral-800 space-y-8 font-medium">
          <span className="flex items-center gap-2 text-sm md:text-xl">
            <img
              src="/tailwindicon.svg"
              className="w-6 h-6 md:w-10 md:h-10 dark:invert"
            />
            Tailwind
          </span>
          <Progress className="h-2" value={100} />
        </div>
        <div className="p-4 md:p-10 border rounded-lg border-neutral-300 dark:border-neutral-800 space-y-8 font-medium">
          <span className="flex items-center gap-2 text-sm md:text-xl">
            <img
              src="/nodeicon.svg"
              className="w-6 h-6 md:w-10 md:h-10 dark:invert"
            />
            Node.js
          </span>
          <Progress className="h-2" value={60} />
        </div>
        <div className="p-4 md:p-10 border rounded-lg border-neutral-300 dark:border-neutral-800 space-y-8 font-medium">
          <span className="flex items-center gap-2 text-sm md:text-xl">
            <img
              src="/expressicon.svg"
              className="w-6 h-6 md:w-10 md:h-10 dark:invert"
            />
            Express
          </span>
          <Progress className="h-2" value={40} />
        </div>
        <div className="p-4 md:p-10 border rounded-lg border-neutral-300 dark:border-neutral-800 space-y-8 font-medium">
          <span className="flex items-center gap-2 text-sm md:text-xl">
            <img
              src="/fluttericon.svg"
              className="w-6 h-6 md:w-10 md:h-10 dark:invert"
            />
            Flutter
          </span>
          <Progress className="h-2" value={50} />
        </div>
        <div className="p-4 md:p-10 border rounded-lg border-neutral-300 dark:border-neutral-800 space-y-8 font-medium">
          <span className="flex items-center gap-2 text-sm md:text-xl">
            <img
              src="/angularicon.svg"
              className="w-6 h-6 md:w-10 md:h-10 dark:invert"
            />
            Angular
          </span>
          <Progress className="h-2" value={40} />
        </div>
        <div className="p-4 md:p-10 border rounded-lg border-neutral-300 dark:border-neutral-800 space-y-8 font-medium">
          <span className="flex items-center gap-2 text-sm md:text-xl">
            <img
              src="/reacticon.svg"
              className="w-6 h-6 md:w-10 md:h-10 dark:invert"
            />
            React Native
          </span>
          <Progress className="h-2" value={20} />
        </div>
        <div className="p-4 md:p-10 border rounded-lg border-neutral-300 dark:border-neutral-800 space-y-8 font-medium">
          <span className="flex items-center gap-2 text-sm md:text-xl">
            <img
              src="/laravelicon.svg"
              className="w-6 h-6 md:w-10 md:h-10 dark:invert"
            />
            Laravel
          </span>
          <Progress className="h-2" value={20} />
        </div>
      </div>
      <article className="text-xs border border-neutral-300 dark:border-neutral-800 p-4 rounded-md text-justify">
        {techs('note')}
      </article>
    </div>
  )
}

export default Tech
