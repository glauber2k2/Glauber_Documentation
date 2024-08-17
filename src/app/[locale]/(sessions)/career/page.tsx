import { useTranslations } from 'next-intl'
import React from 'react'

export default function page() {
  const career = useTranslations('career')
  return (
    <div className="flex flex-col gap-8">
      <h1 className="pb-4 border-b text-xl border-neutral-300 dark:border-neutral-800 font-medium">
        {career('title')}
      </h1>
      <div className="flex flex-col gap-4">
        <span className=" font-medium">{career('worksTitle')}</span>
        <div>
          <h2 className="font-medium text-base border-l-4 pl-2">2022</h2>
          <li className="mt-2 text-xs sm:text-sm text-justify">
            {career('freelancerText')}
          </li>
        </div>
        <div>
          <h2 className="font-medium text-base border-l-4 pl-2">2023</h2>
          <li className="mt-2 text-xs sm:text-sm text-justify">
            {career('conteText')}
          </li>
          <li className="mt-2 text-xs sm:text-sm text-justify">
            {career('gesplantaoText')}
          </li>
          <li className="mt-2 text-xs sm:text-sm text-justify">
            {career('btorText')}
          </li>
        </div>
        <div>
          <h2 className="font-medium text-base border-l-4 pl-2">2024</h2>
          <li className="mt-2 text-xs sm:text-sm text-justify">
            {career('timeAlign')}
          </li>
        </div>
      </div>
    </div>
  )
}
