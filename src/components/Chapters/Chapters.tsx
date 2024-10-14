import React from 'react'
import { Heading, Paragraph, Tab, Video } from '../core'
import { useTranslations } from 'next-intl';
import LanguageSelector from '../Locals/LanguageSelector';



export const Chapters = () => {

    const t = useTranslations('HomePage');

    return (
        <div className='space-y-6'>
            <Video url="https://www.youtube.com/embed/SqcY0GlETPk?si=-OHCyzVVo4sxSZVE" />
            <div className='flex justify-between'>
                <Heading>React Tutorial for Beginners</Heading>
                <LanguageSelector />
            </div>
                <Paragraph>{t('description')}</Paragraph>
                <Tab />
        </div>
    )
}
