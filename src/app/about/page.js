import Link from 'next/link'
import Title from '../../components/Title';
import BackArrow from '@/components/BackArrow';
import ExpandingEducation from '@/components/ExpandingEducation';

import { T, GTProvider, Var } from '@/i18n';

export default function About() {

  return (
    <T>
      <Title />
      <main>
      <ul>
        <li>Grew up in <Link href='https://en.wikipedia.org/wiki/Bath,_Somerset' target="_blank">Bath</Link>, England, as well as Kenya and New Zealand.</li>
        <GTProvider dictionary={{
          "education.expanded": <li><Var name="B.A.">A.B.</Var> <Link href='/documents/degree.pdf' target="_blank">Computer Science</Link>, with certificates in <Link href='/documents/cert_clg.pdf' target="_blank">Classical Greek</Link>, <Link href='/documents/cert_hpd.pdf' target="_blank">History and the Practice of Diplomacy</Link>.</li>,
          "education": <li>Studied <span id='cs' className="link-like">Computer Science</span> at Princeton.</li>
        }}>
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
