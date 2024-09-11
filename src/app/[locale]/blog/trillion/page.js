import BackArrow from "@/components/BackArrow"
import CustomTitle from "@/components/CustomTitle"
import Link from "next/link"

const title = "How to create a $1 trillion British tech giant"
const description = `Can the UK become “the world’s next Silicon Valley”?`
const date = "20th May, 2024"

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
            <p>“I’d like to see a British Alphabet, I’d like to see a British Microsoft…”, the Chancellor, Jeremy Hunt, <Link target='_blank' href="https://www.ft.com/content/3dd37db0-8311-41d8-a028-9280e12e47e1">said</Link> last week. “It might not be for a decade. But I’d like to see a homegrown company with a trillion-dollar [market] cap, with a big global position. That would reflect my ambition for the UK to be the world’s next Silicon Valley. It’s a big dream, but we can definitely get there.”</p>
            <p>A trillion dollars is an extremely ambitious goal — it's more than the value of all UK tech startups put together. Private markets have created company worth that much only seven times in history — five times in the San Francisco Bay (Nvidia, Apple, Google, Meta, Tesla) and twice in Seattle (Microsoft, Amazon). That’s it. So, if Jeremy Hunt wants a British Microsoft, he’s going to have to get serious about it.</p>
            <p>Hunt’s timeline is also very ambitious. Tesla and Meta both took 17 years to reach a trillion dollars in market cap. It took Apple and Microsoft over 40 years. Bitcoin, which is not a company but is a comparable asset, took 13 years. It’s unlikely that any company founded today, in London or San Francisco, will be worth over $1 trillion in a decade, even with inflation.</p>
            <p>The UK is full of brilliant founders and founding teams, although at the scale of a trillion dollars, much of it would come down to choosing the right market. Politicians would also have to think strategically about what it would take for such a company to be founded in Britain, rather than in San Francisco.</p>
            <p>I moved to the US from the UK and I currently run a US-based software startup. My company isn’t close to being worth a billion dollars, let alone a trillion, so I can’t say I have first-hand experience taking a company past the trillion-dollar mark. Very few people do — perhaps half a dozen alive. I count Satya Nadella (Microsoft), Tim Cook (Apple), Jensen Huang (Nvidia), Sundar Pichai (Alphabet), Jeff Bezos (Amazon), and Mark Zuckerberg (Meta). Elon Musk's Tesla was also briefly worth more than $1 trillion during 2021.</p>
            <p>If my company does even a thousandth as well as any of those, it will be another American success story, despite the enduring Britishness of its founder. European founders tend to move to America, like my entrepreneurial hero Patrick Collison, and not the other way around. Collison and his brother John founded Stripe, the $50+ billion internet financial infrastructure company, in San Francisco. “I’m sometimes asked whether Stripe could have been started in Ireland. It’s impossible to really know the counterfactual, but I suspect not.”, he <Link href="https://patrickcollison.com/post/stripe-ireland" target="_blank">wrote</Link> in 2012.</p>
            <p>I don’t think that Stripe could have been founded in Ireland, the UK, or any other European country. To explain why Stripe is an American company and not an Irish one, Collison cites the network effects of Silicon Valley. That part of California is where the investors are, so it’s where the founders have to go to get funded. Because the companies are there, engineers go there for work. Because the engineers and investors are there, more founders come. And Stripe in particular is a startup that sells to other startups, so its ideal customers, investors, and employees are all in San Francisco.</p>
            <p>It would be hard enough to recreate Silicon Valley's network effect in a different city, let alone a different country. But I have one concrete suggestion for British politicians who are serious about trying it: <b>encourage acquisitions</b>.</p>
            <p>This is counterintuitive. If a foreign company buys a British startup, that startup can never grow to a $1 trillion valuation. Google bought London-based DeepMind for $400 million in 2014. Ten years later, the lab is holding its own against OpenAI (valued at $80 billion) and Anthropic ($30 billion), and Britain has only a Google subsidiary instead of a world-leading AI startup. So the naïve approach would be to ban foreign companies from acquiring British tech startups. But that would be a terrible mistake, because acquisitions are crucial to the startup ecosystem.</p>
            <p>The first reason for this is that acquisitions are a graceful exit when a startup would otherwise fail. Founders may be optimistic about remaining independent, but investors are more cynical. They want a return on their investment. By far the most common way of getting this is not going public, but getting acquired. Silicon Valley is particularly good at this. Even failing startups will often get a soft landing, with investors reimbursed and founders “acquihired” by a larger company. Elsewhere, as Collison writes, “that same start-up is likely to simply fail”. “This matters not only because founders are less likely to want to start companies, but also because it’s harder to attract capital and to convince employees to join.”</p>
            <p>Secondly, it’s because, counterintuively, tech company acquisitions are good for competition in the long run. In old, slow-moving industries where nobody is founding new companies, acquisitions are often anti-competitive. But in tech, it’s different. Entrepreneurs are like sharks and can smell blood in the water. When Adobe spends $20 billion to acquire a six-year old startup like Figma, they’re showing they are out of ideas. Adobe are willing to pay their problems to go away, a sort of modern-day <i>Danegeld</i>. If founders can get paid $20 billion to build design tools that compete with Adobe, then they will build design tools that compete with Adobe. And investors will fund it and employees will want to work there.</p>
            <p>European countries don't seem to understand this. Case in point: after 15 months of negotiating with regulators, Adobe and Figma broke off their $20 billion deal. They’re both American companies. But their merger wasn’t blocked by the US Federal Trade Commission — the culprit was the UK’s Competition and Markets Authority. In fact, the CMA’s fundamental mission seems to be blocking American companies from acquiring other American companies. It did the same to Microsoft and Activision, and Facebook and Giphy. Why doesn’t the UK have a $1 trillion, or even an Adobe-sized $200 billion tech company? Start with the CMA. A European regulator blocking one American company from acquiring another American company does not look like protecting consumers. It looks like spite.</p>
            <p>Conservatives like the Chancellor understand that incentives rule the world. And acquisitions are the incentives for founding startups. Founders will take a career risk because they know they’re good enough to get acquihired if it all goes wrong. Investors will back companies because they expect them to be acquired, not because they expect them to become $1 trillion giants. Employees will join for the mission, yes, but also because they expect their shares to be exchanged for money. You need great founders and great employees and great investors to make a $1 billion company work, let alone a $1 trillion one. If you throttle acquisitions, entrepreneurs will stay away. Tax tweaks or regulatory reshuffles won’t make a jot of difference.</p>
            <p>So politicians who are serious about competition and British excellence should, counterintuitively, rein in the Competition and Markets Authority and court American acquirers to buy British. The UK has great engineers and low-enough corporation taxes — now it needs to build Silicon Valley-style economies of scale.</p>
            </main>
            <BackArrow href='/blog'/>
            <br/><br/>
        </>
    )
}