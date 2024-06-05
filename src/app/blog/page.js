import BackArrow from "@/components/BackArrow"
import BlogItem from "../../components/BlogItem"
import Title from "../../components/Title"

export default function Blog() {

    return (
        <>
            <Title />
            <main>
                <BlogItem 
                    title='How to create a $1 trillion British tech giant'
                    description={`Can the UK become “the world’s next Silicon Valley”?`}
                    href='/blog/trillion'
                    date='20th May, 2024'
                />
                <BlogItem 
                    title='How to reform the House of Lords'
                    description='My proposal as an interested expatriate'
                    href='/blog/lords'
                    date='31st March, 2024'
                />
                <BlogItem 
                    title='Churchill on American Ambition'
                    description='"Business to the American is more than the means of earning a living"'
                    href='/blog/churchill'
                    date='25th February, 2024'
                />
                <BlogItem 
                    title='Thoughts about Korea'
                    description='On the 1968 Blue House raid'
                    href='/blog/korea'
                    date='27th July, 2023'
                />
                <BlogItem 
                    title="AI won't end work"
                    description='The point of work is to solve problems, and we have no end of problems to solve'
                    href='/blog/ai'
                    date='22nd July, 2023'
                />
                <BlogItem 
                    title='Ten reasons why we should ban people'
                    description='On human safety and alignment'
                    href='/blog/ban-people'
                    date='1st July, 2023'
                />
                <BlogItem 
                    title='Is AI Fear this Century’s Overpopulation Scare?'
                    description='Pessimists Archive'
                    href='https://newsletter.pessimistsarchive.org/p/is-ai-fear-this-centurys-overpopulation'
                    date='31st March, 2023'
                />
                <BlogItem 
                    title='The Asian Tigers Are a Model for the Global South'
                    description='HumanProgress.org'
                    href='https://humanprogress.org/the-asian-tigers-are-a-model-for-the-global-south/'
                    date='6th July, 2021'
                />
                <BlogItem 
                    title='Uganda faces a fraught election'
                    description='The Spectator'
                    href='https://www.spectator.co.uk/article/uganda-faces-a-fraught-election/'
                    date='9th January 2021'
                />
            </main>
            <br/>
            <BackArrow />
            <br/><br/>
        </>
    )
}