'use client'

import Link from "next/link";
import { useState, useEffect } from "react"

import { useGT } from 'gt-react/client'

export default function ExpandingEducation() {

    const t = useGT();

    const [showFullDegree, setShowFullDegree] = useState(false)

    useEffect(() => {
        const element = document.getElementById('cs');
        if (element) {
            element.onclick = () => {
                setShowFullDegree(prev => !prev);
            };
        }
    }, []);

    return (
        <>
            {t('education')}
            { 
                showFullDegree &&
                t('education.expanded')
            }
        </>
    )
}