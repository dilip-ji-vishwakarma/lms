import React from 'react'
import { Heading, Paragraph, Tab, Video } from '../core'
import { useTranslations } from 'next-intl';
import LanguageSelector from '../Locals/LanguageSelector';

type ChaptersProps = {
    video: {
        url: string;
        start: number;
        end: number;
    }
    heading: string;
    paragraph: string;
}

export const Chapters = ({ video, heading, paragraph }: ChaptersProps) => {

    return (
        <div className='space-y-6' id='#reactjs'>
            <Video
                url={video.url}
                start={video.start}
                end={video.end}
            />
            <div className='md:flex justify-between'>
                <Heading>{heading}</Heading>
                <LanguageSelector />
            </div>
            <Paragraph>{paragraph}</Paragraph>
            <Tab />
        </div>
    )
}
