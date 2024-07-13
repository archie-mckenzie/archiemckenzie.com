'use client'

import Link from "next/link"

import { t } from "@generaltranslation/react/client"

export default function Title() {
    return (
        <header>
            <div className='large-screen-break' />
            <h1 className='title'><Link className="no-link" href='/'>Archie McKenzie</Link></h1>
            {t('greeting')}
        </header>
    )
}