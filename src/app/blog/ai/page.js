import BackArrow from "@/components/BackArrow"
import CustomTitle from "@/components/CustomTitle"
import Link from "next/link"

const title = "AI won't end work"
const description = "The point of work is to solve problems, and we have no end of problems to solve"
const date = "22nd July, 2023"

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
            <p>There’s a story about the economist Milton Friedman, on a visit to a gigantic new canal in Asia. He saw that workers were digging the canal with shovels rather than modern equipment, and asked why.</p>

<p>“You don’t understand.”, his government guide told him. “This is a jobs program.”</p>

<p>“Oh”, replied Friedman, “I thought you were trying to build a canal. If you’re seeking to create jobs, why didn’t you issue them spoons, rather than shovels?”</p>

<p>When people say that AI will end work, it’s almost always because they misunderstand the point of work, in the same way that the government building the canal did.</p>

<p>The point of work is not to distribute money or to keep people busy. The point of work is to get stuff done.</p>

<p>Imagine a world in which AI systems have made human labor obsolete.</p>

<p>Are children no longer dying of malaria? Does everyone have access to clean water? Is cancer cured? How about heart disease? Aging? Are people no longer suffering from addiction or depression? Are people still homeless? Is energy too cheap to meter? Have we fixed climate change? Have we conquered Mars yet?</p>

<p>No?</p>

<p>Then there's still work to be done.</p>

<p>Otherwise — if AI has managed to solve all those problems — maybe the end of work is a price worth paying.</p>

            </main>
            <BackArrow href='/blog'/>
            <br/><br/>
        </>
    )
}