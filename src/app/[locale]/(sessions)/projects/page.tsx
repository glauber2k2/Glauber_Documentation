import { useTranslations } from 'next-intl'
import React from 'react'
import GetRepositories from './_components/GetRepositories'

export default function page() {
  const projects = useTranslations('projects')

  return (
    <div className="flex flex-col gap-8">
      <h1 className="pb-4 border-b text-xl border-neutral-300 dark:border-neutral-800 font-medium">
        {projects('title')}
      </h1>

      <GetRepositories />
      <article className="text-xs border border-neutral-300 dark:border-neutral-800 p-4 rounded-md ">
        {projects('note')}
      </article>
    </div>
  )
}
