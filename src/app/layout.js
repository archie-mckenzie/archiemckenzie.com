import './stylesheet.css'
import getSFEmoji from '@/js/sf';
import { getLocale } from '@/i18n';

export default function RootLayout({ children, params }) {
  const sfEmoji = getSFEmoji();
  const locale = getLocale()
  return (
    <html lang={locale}>
      <head><link rel="icon" id="sf" href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${sfEmoji}</text></svg>`} /></head>
      <body>{children}</body>
    </html>
  )
}
