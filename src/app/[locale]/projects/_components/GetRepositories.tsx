import Link from 'next/link'
import React from 'react'

export default async function GetRepositories() {
  const data = await fetch('https://api.github.com/users/glauber2k2/repos')
  const repositories = await data.json()

  const visibleRepositories = repositories.filter((repo: any) => {
    if (repo.description) {
      return repo.description.startsWith('*')
    }
    return false
  })

  return (
    <div>
      {visibleRepositories.map((repo: any) => (
        <Link href={repo.homepage} key={repo.id} className="p-4 md:p-10">
          <h1 className="font-medium text-lg">{repo.name}</h1>
          <p className="text-sm">
            {repo.description && repo.description.substring(1)}
          </p>
        </Link>
      ))}
    </div>
  )
}
