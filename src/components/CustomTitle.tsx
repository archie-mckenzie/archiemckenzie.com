import Link from "next/link"

interface CustomTitleProps {
    children: React.ReactNode;
    href?: string;
}

export default function CustomTitle({
    children, href
}: CustomTitleProps) {
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
