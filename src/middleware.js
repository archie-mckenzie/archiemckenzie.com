import { createNextMiddleware } from 'gt-react/middleware'

export const approvedLocales = ['en', 'de', 'fr', 'es', 'it', 'pt', 'zh', 'ja', 'ko', 'ru', 'da', 'el']
 
export default createNextMiddleware({approvedLocales})

export const config = {
  matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next (internal files)
       * - static files
       */
      "/((?!api|static|.*\\..*|_next).*)",
  ],
}