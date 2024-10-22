

import './stylesheet.css'
import getSFEmoji from '@/js/sf';
import { getLanguageDirection } from 'generaltranslation';
import { GTProvider } from 'gt-next';

export default function Layout({ children, params }) {
  const sfEmoji = getSFEmoji();
  return (
    <html lang={params.locale} dir={getLanguageDirection(params.locale)}>
      <head>
        <title>Archie McKenzie</title>
        <link rel="icon" id="sf" href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${sfEmoji}</text></svg>`} />
      </head>
      <body>
        <GTProvider>
          {children}
        </GTProvider>
      </body>
    </html>
  )
}
