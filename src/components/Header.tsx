import { FunctionComponent } from 'react'
import ToggleLang from './ToggleLang'
import { Code2Icon } from 'lucide-react'

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <div className="flex items-center gap-2 bg-zinc-900 px-12 py-4 justify-between">
      <span className="text-3xl font-semibold flex items-center gap-4 ">
        <Code2Icon size={42} />
        DevGlauber
      </span>
      <ToggleLang />
    </div>
  )
}

export default Header
