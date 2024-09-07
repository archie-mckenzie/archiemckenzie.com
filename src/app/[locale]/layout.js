

import dictionary from '@/dictionary';
import './stylesheet.css'
import getSFEmoji from '@/js/sf';
import { GTClientProvider } from 'gt-react/client';
import { getLanguageDirection } from 'generaltranslation';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }]
}

export default function Layout({ children, params }) {
  const sfEmoji = getSFEmoji();
  return (
    <html dir={getLanguageDirection(params.locale)}>
      <head><link rel="icon" id="sf" href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${sfEmoji}</text></svg>`} /></head>
      <body>
        <GTClientProvider 
          projectID="9571f82b-79d7-42bd-90dc-f0619cd70e6b"
          dictionaryName='archiemckenzie.com'
          locale={params.locale}
          dictionary={dictionary}
        >
          {children}
        </GTClientProvider>
      </body>
    </html>
  )
}
