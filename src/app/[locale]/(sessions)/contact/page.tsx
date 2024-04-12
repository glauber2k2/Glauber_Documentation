import { useTranslations } from 'next-intl'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Link from 'next/link'

export default function page() {
  const contact = useTranslations('contact')

  return (
    <div className="flex flex-col text-xs md:text-sm gap-8">
      <h1 className="pb-4 border-b text-xl border-neutral-300 dark:border-neutral-800 font-medium">
        {contact('title')}
      </h1>

      <Accordion type="single" collapsible>
        <AccordionItem value="proIg">
          <AccordionTrigger>{contact('proIgTitle')}</AccordionTrigger>
          <AccordionContent className="flex flex-col text-xs md:text-sm">
            {contact('devglauberig')}
            <Link
              href={'https://www.instagram.com/devglauber'}
              className="mt-4 hover:underline text-blue-400"
            >
              @devglauber
            </Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="linkedin">
          <AccordionTrigger>LinkedIn</AccordionTrigger>
          <AccordionContent className="flex flex-col text-xs md:text-sm">
            {contact('linkedin')}
            <Link
              href={'https://www.linkedin.com/in/glauber-monteiro-40439b238/'}
              className="mt-4 hover:underline text-blue-400"
            >
              LinkedIn
            </Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="mail">
          <AccordionTrigger>Email</AccordionTrigger>
          <AccordionContent className="flex flex-col text-xs md:text-sm">
            {contact('mail')}
            <p className="mt-4">devglaubermonteiro@gmail.com</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
