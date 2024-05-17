import Link from "next/link"

export default function CustomTitle({
    children, href
}) {
    return (
        <header>
            <div className='large-screen-break'/>
            <h1 className="title">
            {
                href 
                ?
                <Link href={href} className="no-link">{children}</Link>
                :
                children
            }
            </h1>
        </header>
    )
}