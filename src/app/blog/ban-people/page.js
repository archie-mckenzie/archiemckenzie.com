import BackArrow from "@/components/BackArrow"
import CustomTitle from "@/components/CustomTitle"
import Link from "next/link"

const title = "Ten reasons why we should ban people"
const description = "On human safety and alignment"
const date = "1st July, 2023"

export const metadata = {
    title: title,
    description: description
}

export default function Blog() {
    return (
        <>
            <CustomTitle href={'/blog'}>{title}</CustomTitle>
            <main>
                
            <p className="muted"><span>{description}</span><br/><i>{date}</i></p>
            <ol>
        <li>People can produce factually inaccurate text.</li>
        <li>People can make convincing arguments that don’t have any reasoning behind them.</li>
        <li>People can say things and then not be able to cite their sources.</li>
        <li>People can fake emotional connections they don’t really have.</li>
        <li>People can store your conversations and learn from them later without your permission.</li>
        <li>People can produce unethical or harmful text.</li>
        <li>People can impersonate trustworthy government officials and news outlets.</li>
        <li>People are non-deterministic. Even a small change in input can alter their output significantly.</li>
        <li>People might read copyrighted material and then remember some of it.</li>
        <li>People might replace workers and cause them to lose their jobs.</li>
    </ol>
    <p>In conclusion, humans are not only completely useless, but also incredibly dangerous, and we should ban them right away. Thank you for coming to my human safety talk.</p>
            </main>
            <BackArrow href='/blog'/>
            <br/><br/>
        </>
    )
}