import '../stylesheet.css'
import getSFEmoji from '@/js/sf';
import { GTProvider } from 'gt-next';
import { getLocale } from 'gt-next/server'

export default async function Layout({ children }: { children: React.ReactNode }) {
  const sfEmoji = getSFEmoji();
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <head>
        <title>Archie McKenzie</title>
        <link rel="icon" id="sf" href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${sfEmoji}</text></svg>`} />
      </head>
      <body className="spacing-text">
        <GTProvider>
          {children}
        </GTProvider>
      </body>
    </html>
  )
}
