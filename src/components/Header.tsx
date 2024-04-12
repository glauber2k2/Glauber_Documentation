import { FunctionComponent } from 'react'
import ToggleLang from './ToggleLang'
import { Code2Icon } from 'lucide-react'

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <div className="flex items-center py-6 px-10 justify-between border-b border-neutral-300 dark:border-neutral-800">
      <span className="text-xl font-medium flex items-center gap-4 ">
        <Code2Icon size={32} />
        <h1 className="hidden sm:block">DevGlauber</h1>
      </span>
      <ToggleLang />
    </div>
  )
}

export default Header
