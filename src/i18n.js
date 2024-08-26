import Link from 'next/link';
import { createGT, createVariables } from 'gt-react/next'

const { Var } = createVariables();

export const { T, GTProvider, getLocale } = createGT({
    defaultLocale: 'en',
    renderTimeout: 7500,
    dictionaryName: "archiemckenzie.com",
    dictionary: {
        "education.expanded": <li><Var name="B.A.">A.B.</Var> <Link href='/documents/degree.pdf' target="_blank">Computer Science</Link>, with certificates in <Link href='/documents/cert_clg.pdf' target="_blank">Classical Greek</Link>, <Link href='/documents/cert_hpd.pdf' target="_blank">History and the Practice of Diplomacy</Link>.</li>,
        "education": <li>Studied <span id='cs' className="link-like">Computer Science</span> at Princeton.</li>
    }
});