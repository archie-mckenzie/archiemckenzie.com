'use client'

import Link from 'next/link'
import { useState } from 'react'
import Title from '../../components/Title';
import BackArrow from '@/components/BackArrow';

export default function About() {

  const [showFullDegree, setShowFullDegree] = useState(false)

  const handleClick = () => {
    setShowFullDegree(prev => !prev)
  };

  return (
    <>
      <Title />
      <main>
      <ul>
        <li>Grew up in <Link href='https://en.wikipedia.org/wiki/Bath,_Somerset' target="_blank">Bath</Link>, England, as well as New Zealand and Kenya.</li>
        <li><Link href='documents/balliol.pdf' target="_blank">Turned down</Link> Classics at Oxford for <span className="link-like" onClick={handleClick}>Computer Science</span> at Princeton.</li>
        { 
          showFullDegree &&
          <li>A.B. <Link href='/documents/degree.pdf' target="_blank">Computer Science</Link>, with certificates in <Link href='/documents/cert_clg.pdf' target="_blank">Classical Greek</Link>, <Link href='/documents/cert_hpd.pdf' target="_blank">History and the Practice of Diplomacy</Link>.</li>
        }
        <li><Link href='https://wikipedia.org/wiki/Brian_Kernighan' target='_blank'>Brian Kernighan</Link>'s TA from 2021-24.</li>
        <li>Worked for <Link href='https://humanprogress.org' target="_blank">Human Progress</Link> and <Link href="https://pessimistsarchive.org/" target="_blank">Pessimists Archive</Link>.</li>
        <li>CEO of <Link href='https://generaltranslation.com' target="_blank">General Translation</Link>.</li>
      </ul>
      <BackArrow />
      </main>
    </>
  )
}
