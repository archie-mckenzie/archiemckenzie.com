import Link from "next/link"
import { LocaleSelector, T } from 'gt-next'

export default function Title() {
    return (
        <header>
            <div className='large-screen-break' />
            <div>
                <h1 className='title'><Link className="no-link" href='/'><T>Archie McKenzie</T></Link></h1>
                <LocaleSelector />
            </div>
        </header>
    )
}