'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ArchieMcKenzie() {

  const [showFullDegree, setShowFullDegree] = useState(false)

  const handleClick = () => {
    setShowFullDegree(prev => !prev)
  };

  return (
    <>
      <header>
            <div className='large-screen-break' />
            <h1><Link className='title' href='https://archiemckenzie.com'>Archibald K. S. McKenzie</Link></h1>
      </header>
      <main>
      <ul>
        <li>Grew up in <Link href='https://en.wikipedia.org/wiki/Bath,_Somerset' target="_blank">Bath</Link>, England, as well as New Zealand and Kenya</li>
        <li><Link href='documents/balliol.pdf' target="_blank">Turned down</Link> Classics at Oxford for <span className="link-like" onClick={handleClick}>Computer Science</span> at Princeton</li>
        { 
          showFullDegree &&
          <li><span className="link-like" onClick={handleClick}>A.B. Computer Science, with certificates in Classical Greek, History and the Practice of Diplomacy</span></li>
        }
        <li><Link href='https://en.wikipedia.org/wiki/Brian_Kernighan' target='_blank'>Brian Kernighan</Link>'s TA from 2021-24</li>
        <li>Worked for <Link href='https://humanprogress.org' target="_blank">Human Progress</Link> and <Link href="https://pessimistsarchive.org/" target="_blank">Pessimists Archive</Link></li>
        <li>CEO of <Link href='https://generaltranslation.com' target="_blank">General Translation</Link>, which I co-founded with <Link href='https://www.linkedin.com/in/fernando-aviles/' target="_blank">Fernando Avilés-García</Link>.</li>
      </ul>
      <Link href='/'>←</Link>
      </main>
    </>
  )
}
