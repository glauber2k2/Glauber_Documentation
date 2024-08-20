'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import GeneratePdf from './_components/GeneratePdf'

export default function Page() {
  const curriculum = useTranslations('curriculum')
  const sidebar = useTranslations('sidebar')
  const resumeData = {
    summary: {
      title: curriculum('title'),
      skills: [
        'ReactJs',
        'AngularJs',
        'NextJs',
        'Flutter',
        'NodeJs',
        'Express',
        'Typescript',
        'Javascript',
      ],
      objective: curriculum('objective'),
    },
    education: [curriculum('education')],
    languages: [
      curriculum('portuguese'),
      curriculum('spanish'),
      curriculum('english'),
    ],
    experiences: [
      {
        period: curriculum('btorPeriod'),
        role: curriculum('btorRole'),
        company: curriculum('btorCompany'),
        details: [
          curriculum('btorDetails1'),
          curriculum('btorDetails2'),
          curriculum('btorDetails3'),
        ],
      },
      {
        period: curriculum('contePeriod'),
        role: curriculum('conteRole'),
        company: curriculum('conteCompany'),
        details: [curriculum('conteDetails1'), curriculum('conteDetails2')],
      },
      {
        period: curriculum('ubtechPeriod'),
        role: curriculum('ubtechRole'),
        company: curriculum('ubtechCompany'),
        details: [curriculum('ubtechDetails1')],
      },
    ],
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="pb-4 border-b text-xl border-neutral-300 dark:border-neutral-800 font-medium flex justify-between items-center">
        {sidebar('cv')}
      </h1>

      <GeneratePdf resumeData={resumeData} />

      <div className="flex flex-col p-4 md:p-10 border rounded-lg border-neutral-300 dark:border-neutral-800 text-xs md:text-base">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-medium">
              Glauber Monteiro
            </h1>
            <h2 className="text-sm md:text-xl font-medium">
              {resumeData.summary.title}
            </h2>
          </div>

          <div className="flex-col text-right p-8 hidden md:flex">
            <small>glaubermonteirodev@gmail.com</small>
            <small>
              https://www.linkedin.com/in/glauber-monteiro-40439b238/
            </small>
          </div>
        </div>

        <div className="mt-10 md:mt-0 space-y-8">
          <p>{resumeData.summary.skills.join(' | ')}</p>
          <p>{resumeData.summary.objective}</p>
        </div>

        <div className="mt-10 ">
          <h3 className="text-sm md:text-lg mb-4 font-medium">
            {curriculum('educationTitle')}
          </h3>
          <span>2022</span>
          <p>{resumeData.education}</p>
        </div>

        <div className="mt-10 ">
          <h3 className="text-sm md:text-lg mb-4 font-medium">
            {curriculum('languagesTitle')}
          </h3>
          {resumeData.languages.map((lang, index) => (
            <p key={index} className="mt-4">
              {lang}
            </p>
          ))}
        </div>

        <div className="!mt-10 ">
          <h3 className="text-sm md:text-lg mb-4 font-medium">
            {curriculum('professionalTitle')}
          </h3>
          {resumeData.experiences.map((exp, expIndex) => (
            <div key={expIndex} className="mb-10 space-y-2">
              <div className="flex items-start">
                <p className="w-48">{exp.period}</p>

                <p className="">{exp.role}</p>
              </div>
              <p className="font-medium">{exp.company}</p>
              <ul className="list-disc ml-8">
                {exp.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
