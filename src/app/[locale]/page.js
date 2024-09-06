import Link from 'next/link'
import Title from '../../components/Title.js'

import { t } from '@/i18n'

export default function ArchieMcKenzie() {
  return (
    <>
      <Title/>
      <main>
        {t('landing')}
      </main>
    </>
  )
}
