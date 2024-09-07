import dictionary from "./dictionary";
import { createGT } from 'gt-react/next'

export const approvedLocales = ['en', 'de', 'fr', 'es', 'it', 'pt', 'zh', 'ja', 'ko', 'ru', 'da', 'el']

export const { GTProvider } = createGT({
    approvedLocales: ['en', 'de', 'fr', 'es', 'it', 'pt', 'zh', 'ja', 'ko', 'ru', 'da', 'el'],
    dictionaryName: 'archiemckenzie.com',
    dictionary
})