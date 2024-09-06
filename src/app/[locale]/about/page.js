import Link from 'next/link'
import Title from '../../../components/Title';
import BackArrow from '@/components/BackArrow';

import { GTProvider } from '@/i18n';
import ExpandingAbout from '@/components/ExpandingAbout';

export default function About() {

  return (
    <GTProvider>
      <Title />
      <main>
      <ExpandingAbout/>
      <BackArrow />
      </main>
    </GTProvider>
  )
}
