import BackArrow from "@/components/BackArrow"
import CustomTitle from "@/components/CustomTitle"
import { NextI18N, I18N } from "@generaltranslation/react"

const title = "Churchill on American Ambition"
const description = '"Business to the American is more than the means of earning a living"'
const date = "25th February, 2024"

export const metadata = {
    title: title,
    description: description
}

export default function Blog() {
    return (
        <>
            <I18N>
            <CustomTitle href={'/blog'}>{title}</CustomTitle>
            <main>
                
            <p className="muted"><span>{description}</span><br/><i>{date}</i></p>
            <div className="body markup">
      <p>In 1938, as part of a larger essay on Britain and America, Winston Churchill wrote about American business culture:</p>
      <blockquote>
        <p>Business to the American is more than the means of earning a living or making a fortune; it is that career of interest, ambition, possibly even glory, which in the older world is afforded by the learned professions and State services, military and civilian.</p>
      </blockquote>
      <blockquote>
        <p>A young American, wishing to play a worthy part in the control of affairs, directs himself instinctively towards the managing of factories, railroads, banks, stores, or some other of the thousand-and-one varieties of industrial or commercial enterprise. Practically all the prizes of American life are to be gained in business. There, too, is the main path of useful service to the nation. Nearly all that is best and most active in the manhood and ability of the United States goes into business with the same sense of serving the country as a son of an old family in England might enter Parliament.</p>
      </blockquote>
      <blockquote>
        <p>It is this concentration of American talent on business that has gained for the United States the title of ‘The Land of the Dollar’. But for the best type of Americans, dollars have been a by-product in business activity rather than its main aim. [1]</p>
      </blockquote>
      <p>Having spent the last few years surrounded by young Americans, I find Churchill’s observation true enough. It makes me think again about my <em>alma mater</em>’s informal motto:</p>
      <blockquote>
        <p>In the Nation’s Service and the Service of Humanity</p>
      </blockquote>
      <hr/>
      <p>[1] <em>The Union of the English-Speaking Peoples</em>, Winston S. Churchill, <em>News of the World</em>, 15th May 1938</p>
    </div>
            </main>
            </I18N>
            <BackArrow href='/blog'/>
            <br/><br/>
        </>
    )
}