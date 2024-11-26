'use client'

import Link from "next/link";
import { useState, useEffect } from "react"

import { useElement } from "gt-next";

export default function ExpandingAbout() {

    const t = useElement();

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
        <ul>
            {t('about.background')}
            {t('about.education', { expanding_item: showFullDegree ? t('expanding_education') : undefined })}
            {t('about.ta')}
            {t('about.founder')}
        </ul>
    )
}