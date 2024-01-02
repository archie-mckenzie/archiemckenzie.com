import Link from 'next/link'
import Title from '../../../components/Title'

export default function ArchieMcKenzie() {
  return (
    <>
      <Title />
      <main>
      <ul>
        <li>Grew up in <Link href='https://en.wikipedia.org/wiki/Bath,_Somerset' target="_blank">Bath</Link>, England</li>
        <li>Also spent time in New Zealand and Kenya</li>
        <li>Learned a few different languages, including Latin and Greek</li>
        <li>At undergrad, <Link href='documents/balliol.pdf' target="_blank">turned down</Link> Classics at Oxford for Princeton CS</li>
        <li><Link href='https://en.wikipedia.org/wiki/Brian_Kernighan' target='_blank'>Brian Kernighan</Link>'s TA from 2021-24</li>
        <li>Worked for <Link href='https://humanprogress.org' target="_blank">Human Progress</Link> and <Link href="https://pessimistsarchive.org/" target="_blank">Pessimists Archive</Link></li>
        <li>Currently building something new with <Link href='https://www.linkedin.com/in/fernando-aviles/' target="_blank">Fernando Avilés-García</Link></li>
      </ul>
      <Link href='/'>←</Link>
      </main>
    </>
  )
}
