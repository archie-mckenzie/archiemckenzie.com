import Link from "next/link"
export default function BackArrow({href}) {
    return <Link href={href ? href : '/'}>←</Link>
}