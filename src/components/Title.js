'use client'

import Link from "next/link"

import { useGT } from "gt-react/client"

export default function Title() {
    const t = useGT();
    return (
        <header>
            <div className='large-screen-break' />
            <h1 className='title'><Link className="no-link" href='/'>Archie McKenzie</Link></h1>
            {t('helloworld')}
        </header>
    )
}