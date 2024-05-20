import BackArrow from "@/components/BackArrow"
import CustomTitle from "@/components/CustomTitle"
import Link from "next/link"

const title = "How to reform the House of Lords"
const description = "My proposal as an interested expatriate"
const date = "31st March, 2024"

export const metadata = {
    title: title
}

export default function Blog() {
    return (
        <>
            <CustomTitle href={'/blog'}>{title}</CustomTitle>
            <main>
                
            <p className="muted"><span>{description}</span><br/><i>{date}</i></p>

<p>The Labour Party have <a href="https://www.ft.com/content/e7935e2e-acd9-4f61-bc6d-f0b3b5c07357" rel="nofollow ugc noopener">promised</a> to reform the UK House of Lords if elected this year.</p>
<p>Lords reform seems like an unimportant issue. Few people care deeply about it. But the appointed Lords are often the last line of defence against bad laws passed by the elected Commons. Many Lords have expertise in some area — a science, an industry — which makes them better at scrutinizing legislation than overworked or uninterested MPs.</p> 
<p>Even so, I agree that the House of Lords needs to change:</p>
<ul>
  <li>
    <p>For one thing, it’s too big.</p>
    <ul>
      <li>
        <p>The House of Lords is far larger than the Upper House in similar Westminster-style systems. Compare the almost-800 sitting peers with the 106 Canadian senators or 76 Australian senators. There is not even enough physical space for all the peers in the House of Lords chamber.</p>
      </li>
    </ul>
  </li>
  <li>
    <p>For another, operative political power should not be inheritable.</p>
    <ul>
      <li>
        <p>The House of Lords still has 92 hereditary peers, appointed by and from a group of about a thousand people who inherit their titles. It’s just not sensible, as a rule, for seats in Parliament to be handed out like that. (I write this knowing that I am in very distant remainder to a <Link target='_blank' href='https://wikipedia.org/wiki/Lord_Herries_of_Terregles'>peerage</Link> myself.)</p>
      </li>
    </ul>
  </li>
</ul>
<p>How, then, to reform the Lords?</p>
<p>Below are my suggestions for Sir Keir Starmer, who will almost certainly be Prime Minister by the end of the year.</p>
<p>Good reforms would:</p>
<ul>
  <li>
    <p>Maintain the primacy of the elected House of Commons.</p>
  </li>
  <li>
    <p>Allow for high-quality scrutiny of legislation from experts who would not otherwise stand for election.</p>
  </li>
  <li>
    <p>Preserve the United Kingdom’s culture and history.</p>
  </li>
</ul>
<p>With that in mind, I propose to:</p>
<ul>
  <li>
    <p>Retain an appointed, rather than elected, upper house.</p>
    <ul>
      <li>
        <p>It’s important not to undermine the legitimacy of the House of Commons.</p>
      </li>
      <li>
        <p>An elected upper house would cause unnecessary deadlock, especially if different parties controlled the two chambers.</p>
      </li>
    </ul>
  </li>
  <li>
    <p>Abolish 90 of the 92 guaranteed seats for hereditary peers, and the 26 Lords Spiritual.</p>
    <ul>
      <li>
        <p>The two constitutionally required lords (the Earl Marshal and the Lord Great Chamberlain) can stay for the time being.</p>
      </li>
      <li>
        <p>Without hereditary peers and Lords Spiritual, about 675 peers would remain.</p>
      </li>
    </ul>
  </li>
  <li>
    <p>Cap the House of Lords at 650 members, the same as the House of Commons.</p>
    <ul>
      <li>
        <p>This would reduce overcrowding in the House of Lords chamber, which is built for only 400 people.</p>
      </li>
    </ul>
  </li>
  <li>
    <p>Like today, the monarch, on the advice of the Prime Minister, would appoint new members of the House of Lords whenever a current member retires or dies, up to the 650 limit.</p>
    <ul>
      <li>
        <p>Slowly shrink the House of Lords to 650 members by adopting a two-out, one-in policy until the target membership is reached.</p>
      </li>
    </ul>
  </li>
  <li>
    <p>Keep it so that members of the House of Lords are appointed by the monarch on the advice the Prime Minister.</p>
    <ul>
      <li>
        <p>Keep the convention that, via the Prime Minister, opposition party leaders also recommend a number of new members to monarch.</p>
      </li>
    </ul>
  </li>
  <li>
    <p>To sit in the House of Lords, it should be <em>necessary</em>, but not <em>sufficient</em>, to be a peer, either life or hereditary.</p>
    <ul>
      <li>
        <p>Otherwise it wouldn’t be the House of “Lords”.</p>
      </li>
    </ul>
  </li>
  <li>
    <p>In the current system, becoming a life peer automatically entitles you to sit in the House of Lords. I propose to separate the two events — becoming a peer and joining the House of Lords would be two distinct things.</p>
    <ul>
      <li>
        <p>When a government wants to appoint someone who is not already a peer to the House of Lords, they must first elevate them to a peerage and then appoint them to the Lords.</p>
      </li>
      <li>
        <p>In practice this could be done simultaneously.</p>
      </li>
      <li>
        <p>Of course, if a candidate for appointment is already a peer (life or hereditary), then they could simply be appointed, without the need to make them a peer first.</p>
      </li>
    </ul>
  </li>
  <li>
    <p>Bring back hereditary peerages.</p>
    <ul>
      <li>
        <p>Titles cost nothing, but people value them a lot, especially if they can pass them on. We should use that to encourage people to do great things.</p>
      </li>
      <li>
        <p>The UK should make people Viscount <em>so-and-so</em> like the USA gives out Presidential Medals of Freedom.</p>
      </li>
      <li>
        <p>Creating new hereditary peers requires no change in the law. (Harold Macmillan was created the Earl of Stockton in the 1980s.) But it is hard to defend while hereditary peers still have 92 guaranteed seats in the House of Lords.</p>
      </li>
      <li>
        <p>Grant new peerages at all levels, not only barons and baronesses. Include the titles of Viscount, Viscountess, Earl, Countess, Marquess, Marchioness, even Duke and Duchess.</p>
      </li>
      <li>
        <p>Issue these newly created hereditary peerages to heirs general, rather than heirs male. That is, let title-holders’ children inherit their titles regardless of gender. Some Scottish peerages have done this for centuries.</p>
      </li>
    </ul>
  </li>
</ul>
<p>I eagerly anticipate a job offer from Sir Keir Starmer, to implement these reforms as quickly as possible.</p>
            </main>
            <BackArrow href='/blog'/>
            <br/><br/>
        </>
    )
}