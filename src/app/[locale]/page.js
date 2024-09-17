'use client'

import Link from 'next/link'
import Title from '../../components/Title.js'

import { getGT } from 'gt-next';

export default function ArchieMcKenzie() {
  const t = getGT();
  return (
    <>
      <Title/>
      <main>
        {t('landing')}
      </main>
    </>
  )
}
