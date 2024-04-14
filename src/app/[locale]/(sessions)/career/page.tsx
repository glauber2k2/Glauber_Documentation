import { useTranslations } from 'next-intl'
import React from 'react'

export default function page() {
  const career = useTranslations('career')
  return (
    <div className="flex flex-col gap-8">
      <h1 className="pb-4 border-b text-xl border-neutral-300 dark:border-neutral-800 font-medium">
        {career('title')}
      </h1>
      <div className="">
        <span className=" font-medium">{career('worksTitle')}</span>
        <li className="mt-2 text-xs sm:text-sm text-justify">
          {career('freelancerText')}
        </li>
        <li className="mt-2 text-xs sm:text-sm text-justify">
          {career('btorText')}
        </li>
        <li className="mt-2 text-xs sm:text-sm text-justify">
          {career('timeAlign')}
        </li>
      </div>
    </div>
  )
}
