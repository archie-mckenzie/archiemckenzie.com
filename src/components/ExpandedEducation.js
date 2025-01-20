import { T, Var } from "gt-next";
import Link from "next/link";

export default function ExpandedEducation() {
    return (
        <T id="expanded_education">
            <li><Var name="B.A.">A.B.</Var> <Link href='https://www.cs.princeton.edu/ugrad/undergraduate-program' target="_blank">Computer Science</Link>, with certificates in <Link href="https://classics.princeton.edu/programs/undergraduate/minors-certificates" target="_blank">Classical Greek</Link>, and <Link href="https://hpd.princeton.edu/" target="_blank">History and the Practice of Diplomacy</Link>.</li>
        </T>
    )
}