import { createNextMiddleware } from 'gt-react/middleware'
import { approvedLocales } from './i18n'

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