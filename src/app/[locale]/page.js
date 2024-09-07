'use client'

import Link from 'next/link'
import Title from '../../components/Title.js'

import { useGT } from 'gt-react/client'

export default function ArchieMcKenzie() {
  const t = useGT();
  return (
    <>
      <Title/>
      <main>
        {t('landing')}
      </main>
    </>
  )
}
