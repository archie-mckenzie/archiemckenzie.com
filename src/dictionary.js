import { Var } from "gt-next"
import Link from "next/link"
import ExpandingAbout from "./components/ExpandingAbout"

export default {
    "landing": (
        <>
        <p><b>Hello, world!</b></p>
      <p>I'm currently working on <Link href='https://generaltranslation.com' target="_blank">General Translation</Link>, an AI localization platform.</p>
      <p className='link-grid'>
        <Link href="/about">About me</Link>
        <Link href='https://github.com/archie-mckenzie' target="_blank">GitHub</Link>
        <Link href='https://twitter.com/aksmckenzie' target="_blank">Twitter</Link>
        <Link href='https://linkedin.com/in/archie-mckenzie' target="_blank">LinkedIn</Link>
      </p>
      <p className='contact-paragraph'>
        <a href='mailto:contact@archiemckenzie.com'>Get in touch!</a>
      </p>
      </>
    ),
    "about": {
        "background": <li>Grew up in <Link href='https://en.wikipedia.org/wiki/Bath,_Somerset' target="_blank">Bath</Link>, England, as well as Kenya and New Zealand.</li>,
        "education": <li>Studied <span id='cs' className="link-like">Computer Science</span> at Princeton.</li>,
        "ta": <li><Link href='https://wikipedia.org/wiki/Brian_Kernighan' target='_blank'>Brian Kernighan</Link>'s TA from 2021-24.</li>,
        "work": <li>Worked for <Link href='https://humanprogress.org' target="_blank">Human Progress</Link>, <Link href="https://pessimistsarchive.org/" target="_blank">Pessimists Archive</Link>, and <Link href='https://en.wikipedia.org/wiki/New_York_City_Office_of_Technology_and_Innovation' target="_blank">New York City</Link>.</li>,
        "founder": <li>Founder of <Link href='https://generaltranslation.com' target="_blank">General Translation, Inc.</Link>, which helps developers make their software multilingual.</li>
    },
    "expanding_education": <li><Var name="B.A.">A.B.</Var> <Link href='https://www.cs.princeton.edu/ugrad' target="_blank">Computer Science</Link>, with certificates in <Link href="https://classics.princeton.edu/programs/undergraduate/minors-certificates" target="_blank">Classical Greek</Link>, and <Link href="https://hpd.princeton.edu/" target="_blank">History and the Practice of Diplomacy</Link>.</li>,
    "new_landing": (
      <div>
        <p><b>Hello, world!</b></p>
        <div style={{"marginBottom": "25px"}}>
        <ExpandingAbout/>
        </div>
        <p className='link-grid'>
        <Link href='https://github.com/archie-mckenzie' target="_blank">GitHub</Link>
        <Link href='https://twitter.com/aksmckenzie' target="_blank">Twitter</Link>
        <Link href='https://linkedin.com/in/archie-mckenzie' target="_blank">LinkedIn</Link>
        <a href='mailto:contact@archiemckenzie.com'>Get in touch!</a>
        </p>
      </div>
    )
}