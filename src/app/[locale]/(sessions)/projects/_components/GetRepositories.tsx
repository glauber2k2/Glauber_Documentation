import React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { FaCss3, FaJs, FaNodeJs, FaReact } from 'react-icons/fa'
import {
  SiDjango,
  SiNextdotjs,
  SiPython,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import Link from 'next/link'

export default async function GetRepositories() {
  interface IconTech {
    [key: string]: JSX.Element
  }

  const iconTech: IconTech = {
    css: <FaCss3 />,
    next: <SiNextdotjs />,
    react: <FaReact />,
    javascript: <FaJs />,
    typescript: <SiTypescript />,
    tailwind: <SiTailwindcss />,
    node: <FaNodeJs />,
    python: <SiPython />,
    django: <SiDjango />,
  }

  const data = await fetch('https://api.github.com/users/glauber2k2/repos')
  const repositories = await data.json()

  const visibleRepositories = repositories.filter((repo: any) => {
    if (repo.description) {
      return repo.description.startsWith('*')
    }
    return false
  })

  return (
    <div className="w-full flex items-center justify-center">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-2/3 md:w-[90%]"
      >
        <CarouselContent>
          {visibleRepositories.map((repo: any) => (
            <CarouselItem
              key={repo.id}
              className="md:basis-1/2 lg:basis-1/3 overflow-hidden"
            >
              <Link href={repo.homepage} target="_blank">
                <div className=" border border-neutral-300 dark:border-neutral-800 rounded-lg overflow-hidden grid grid-rows-[3fr_1fr] aspect-square items-center justify-center cursor-pointer">
                  <img
                    src={`https://raw.githubusercontent.com/glauber2k2/${repo.name}/main/public/thumb.png`}
                    className="object-cover w-full h-full dark:opacity-90 hover:opacity-90 transition-opacity duration-300"
                  />
                  <div className="font-semibold px-4 space-y-1">
                    <h1 className="text-xs capitalize">{repo.name}</h1>
                    <div className="flex items-center gap-2">
                      {repo.topics.map((topic: string) => (
                        <span key={topic} className="text-xs" title={topic}>
                          {iconTech[topic]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
