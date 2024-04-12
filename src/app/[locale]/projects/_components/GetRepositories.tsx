import React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default async function GetRepositories() {
  // const data = await fetch('https://api.github.com/users/glauber2k2/repos')
  // const repositories = await data.json()

  const repositories = [
    { id: '1', name: 'teste', description: '*' },
    { id: '2', name: 'teste', description: '*' },
    { id: '3', name: 'teste', description: '*' },
    { id: '5', name: 'teste', description: '*' },
    { id: '6', name: 'teste', description: '*' },
    {
      id: '4',
      name: 'teste',
      description:
        '*testando testando testandotestandotestando testandotestando testando',
    },
  ]

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
              <div className=" border border-neutral-300 dark:border-neutral-800 rounded-lg p-4 grid grid-rows-[3fr_1fr] aspect-square items-center justify-center">
                <img
                  src={`https://raw.githubusercontent.com/glauber2k2/${'Burguer'}/main/public/thumb.png`}
                  className="object-cover w-full h-full"
                />
                <span className="text-2xl font-semibold">
                  {repo.name}
                  <p className="text-xs font-light">
                    {repo.description && repo.description.substring(1)}
                  </p>
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
