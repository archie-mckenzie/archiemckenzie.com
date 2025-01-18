import BackArrow from "@/components/BackArrow"
import CustomTitle from "@/components/CustomTitle"

const title = "Thoughts about Korea"
const description = "On the 1968 Blue House raid"
const date = "27th July, 2023"

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
            <p>In January 1968, a North Korean assassination squad called Unit 124 crossed a frozen river from North Korea into South Korea. Their mission was to eliminate South Korean President Park Chung Hee. Each of the thirty-one men in Unit 124 was hand-picked for the task. They trained for two years under brutal conditions. By the time they crossed the border, the men were at their physical peak, motivated, and well-prepared. They had even rehearsed their assassination plan using a full-scale duplicate of the Blue House — South Korea’s equivalent of the White House.</p>

<p>But a chance encounter led to detection by the South Korean authorities. The men split into small groups, travelling across the Korean countryside on foot. Slipping separately into Seoul, they regrouped, donned fake South Korean army uniforms, and advanced on the Blue House.</p>

<p>Mere meters from the presidential palace, a suspicious police officer stopped the group for questioning. When he realized something was wrong, the North Korean commandos shot him, and a desperate battle broke out. But with South Korean reinforcements on the way, the North Koreans scattered.</p>

<p>Over the next week, twenty-nine of the thirty-one commandos were killed attempting to flee back to North Korea. One was captured. The remaining one, Pak Jae-gyong, killed several of his pursuers and managed to get across the DMZ into North Korea.</p>

<p>Pak Jae-gyong is still alive. He’s now one of Kim Jong Un’s highest-ranking generals.</p>

<p>Napoleon once said, perhaps apocryphally, that “to understand the man, you have to know what was happening in the world when he was twenty”. Does Pak Jae-gyong still remember those nerve-wracking nights in the Korean countryside? Does he still remember his twenty-nine companions who died in brutal, hopeless battles against South Korean soldiers? Has he retold his story to Kim Jong Un? I’m sure of it.</p>

<p>Korea is one country. The people in Seoul feel that very deeply — and I suspect the people in Pyongyang feel it too. Koreans, even young Koreans, feel an unspeakable grief over what has happened to their country. I speak reasonable German and instinctively compare North Korea to East Germany, but from the time the Berlin Wall went up, Germany was divided less than 30 years. Korea has been divided over 70.</p>

<p>Why is it that Germany reunified but not Korea?</p>

<p>It comes down to the people who are in power, their mindsets and their incentives. It is impossible to understand why Korea is still divided without understanding men like Pak Jae-gyong. And to understand Pak Jae-gyong, you have to go back to a cold day in January 1968, when thirty-one commandos crossed a frozen river.</p>

<p>“To understand the man, you have to know what was happening in the world when he was twenty.”</p>

<p>For those of us who were that age in 2023, what will the world we create look like?</p>

            </main>
            <BackArrow href='/blog'/>
            <br/><br/>
        </>
    )
}