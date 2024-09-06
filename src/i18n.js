import Link from 'next/link';
import { createGT, createVariables } from 'gt-react/next'
import dictionary from './dictionary';

export const { t, GTProvider, getLocale } = createGT({
    defaultLocale: 'en',
    renderTimeout: 7500,
    dictionaryName: "archiemckenzie.com",
    dictionary
});