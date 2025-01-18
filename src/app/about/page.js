'use client'

import Link from 'next/link'
import Title from '../../components/Title';
import BackArrow from '@/components/BackArrow';

export default function About() {

  return (
    <>
      <Title />
      <main>
      <ExpandingAbout/>
      <BackArrow />
      </main>
    </>
  )
}
