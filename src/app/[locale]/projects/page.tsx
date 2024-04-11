import { useTranslations } from 'next-intl'
import React from 'react'
import GetRepositories from './_components/GetRepositories'

export default function page() {
  const projects = useTranslations('about')

  return (
    <div className="flex flex-col gap-8">
      <h1 className="pb-4 border-b text-xl border-neutral-300 dark:border-neutral-800">
        {projects('title')}
      </h1>
      <GetRepositories />
    </div>
  )
}
