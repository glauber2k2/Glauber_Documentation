import { FunctionComponent } from 'react'
import ToggleLang from './ToggleLang'
import { LuCode2 } from 'react-icons/lu'
import { Link } from '../../navigation'

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <div className="flex items-center py-6 px-10 justify-between border-b border-neutral-300 dark:border-neutral-800">
      <Link href={'/'}>
        <span className="text-xl font-medium flex items-center gap-4 ">
          <LuCode2 size={32} />
          <h1 className="hidden sm:block">DevGlauber</h1>
        </span>
      </Link>
      <ToggleLang />
    </div>
  )
}

export default Header
