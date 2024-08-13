import { createGT } from 'gt-react/next'
export const { T, GTProvider, Var } = createGT({
    defaultLocale: 'en',
    renderTimeout: 7500,
    renderMethod: 'replace',
    dictionaryName: "archiemckenzie.com"
});