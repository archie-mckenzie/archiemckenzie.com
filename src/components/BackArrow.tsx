import Link from "next/link"

export default function BackArrow({ href }: { href?: string }) {
    return <Link href={href ? href : '/'}>←</Link>
}
