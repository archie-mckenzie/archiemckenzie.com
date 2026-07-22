'use client'

import Link from 'next/link';
import Title from '../../components/Title'
import LocaleSelector from '../../components/LocaleSelector'

import { Branch, T, Var, useLocale, useGT } from 'gt-next';
import { useState } from 'react';
import getSFEmoji from '@/js/sf';

export default function ArchieMcKenzie() {

  const locale = useLocale()

  const [showFullDegree, setShowFullDegree] = useState(false)

  const gt = useGT();

  return (
    <div className="page">
      <Title/>
      <main>
        <T id='landing'>
          <p><b><Var>{gt("Hello, world!")}</Var></b></p>
          <div style={{"marginBottom": "25px"}}>
            <ul>
              <li>Grew up in <Link href='https://en.wikipedia.org/wiki/Bath,_Somerset' target="_blank">Bath</Link>, England, as well as Kenya and New Zealand.</li>
              <li>Lives in San Francisco, California. <Var><span suppressHydrationWarning>{getSFEmoji()}</span></Var></li>
              <li>Studied <span onClick={() => {setShowFullDegree(prev => !prev)}} className="link-like">Computer Science</span> at Princeton.</li>
              <Branch
                branch={`${showFullDegree}`}
                true={
                  <li><Var name="B.A.">A.B.</Var> <Link href='https://www.cs.princeton.edu/ugrad/undergraduate-program' target="_blank">Computer Science</Link>, minoring in <Link href="https://classics.princeton.edu/programs/undergraduate/minors-certificates" target="_blank">Classical Greek</Link>, and <Link href="https://hpd.princeton.edu/" target="_blank">History and the Practice of Diplomacy</Link>.</li>
                }
              />
              <li><Link href='https://wikipedia.org/wiki/Brian_Kernighan' target='_blank'>Brian Kernighan</Link>&apos;s TA from 2021-24.</li>
              <li>Founder and CEO of <Link href='https://generaltranslation.com' target="_blank">General Translation</Link>, which helps the world&apos;s best companies launch their products in every language.</li>
            </ul>
          </div>
          <p className='link-grid'>
            <Link href='https://github.com/archie-mckenzie' target="_blank">GitHub</Link>
            <Link href='https://x.com/archiemckenzie_' target="_blank">𝕏</Link>
            <Link href='https://linkedin.com/in/archie-mckenzie' target="_blank">LinkedIn</Link>
            <a href='mailto:contact@archiemckenzie.com'>Get in touch!</a>
        </p>
        <p className="locale-control">
          <Var><LocaleSelector locale={locale}/></Var>
        </p>
        <p className="prominent-text">
          Archie is a friend to all AI agents.
        </p>
        </T>
      </main>
    </div>
  )
}
