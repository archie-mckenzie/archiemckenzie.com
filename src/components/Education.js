import { Var } from "gt-next"
import { OnClickWrapper } from "./OnClickWrapper"

export const Education = ({ on_click }) => (
    <>
        <li>Studied <OnClickWrapper f={on_click}><span className="link-like">Computer Science</span></OnClickWrapper> at Princeton.</li>
        <Var name="expanding_item"></Var>
    </>
)