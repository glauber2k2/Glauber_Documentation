import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Index')
  return <div className="h-full flex p-8">a</div>
}
