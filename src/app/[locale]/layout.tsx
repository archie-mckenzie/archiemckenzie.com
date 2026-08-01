import '../stylesheet.css'
import type { Metadata } from 'next';
import getSFEmoji from '@/js/sf';
import { GTProvider } from 'gt-next';
import { getLocale, getGT } from 'gt-next/server'

type LayoutProps = {
  children: React.ReactNode;
};

const themeInitializationScript = `
  (() => {
    let theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    try {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "light" || storedTheme === "dark") theme = storedTheme;
    } catch {}

    document.documentElement.dataset.theme = theme;
  })();
`;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getGT();
  const title = 'Archie McKenzie';
  const description = t('Founder of General Translation. Interested in applied philology.');
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function Layout({ children }: LayoutProps) {
  const sfEmoji = getSFEmoji();
  const locale = await getLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializationScript }} />
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
