import Link from 'next/link'
import Title from '../../../components/Title';
import BackArrow from '@/components/BackArrow';
import ExpandingEducation from '@/components/ExpandingEducation';

import { T, GTProvider } from '@/i18n';

export default function About() {

  return (
    <T>
      <Title />
      <main>
      <ul>
        <li>Grew up in <Link href='https://en.wikipedia.org/wiki/Bath,_Somerset' target="_blank">Bath</Link>, England, as well as Kenya and New Zealand.</li>
        <GTProvider>
          <ExpandingEducation/>
        </GTProvider>
        <li><Link href='https://wikipedia.org/wiki/Brian_Kernighan' target='_blank'>Brian Kernighan</Link>'s TA from 2021-24.</li>
        <li>Worked for <Link href='https://humanprogress.org' target="_blank">Human Progress</Link> and <Link href="https://pessimistsarchive.org/" target="_blank">Pessimists Archive</Link>.</li>
        <li>Founder of <Link href='https://generaltranslation.com' target="_blank">General Translation, Inc.</Link>.</li>
      </ul>
      <BackArrow />
      </main>
    </T>
  )
}
