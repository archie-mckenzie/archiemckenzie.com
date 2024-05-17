import Link from "next/link"

export default function BlogItem({
    href, title, description, date
}) {

    const external = href.slice(0, 4) === "http";

    return (
        <div>
           <Link href={href} target={external ? `_blank` : ``}><h4 className="blog-title">{title}</h4></Link>
           <div className="blog-description">
                {description}
                <br/>
                <i>{date}</i>
            </div>
        </div>
    )
}