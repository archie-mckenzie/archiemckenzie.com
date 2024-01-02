import Link from "next/link"

export default function Title() {
    return (
        <header>
            <div className='large-screen-break' />
            <h1><Link className='title' href='https://archiemckenzie.com'>Archie McKenzie</Link></h1>
        </header>
    )
}