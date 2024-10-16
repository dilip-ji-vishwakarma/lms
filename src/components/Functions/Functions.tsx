"use client";
import { useTranslations } from "next-intl";
import { Chapters } from "../Chapters";

export const RenderStepContent = ({ step }:any) => {
    const componentClass = "text-black shadow-[rgba(149,157,165,0.2)_0px_8px_24px] md:p-5 p-3";
    const t = useTranslations('HomePage');

    switch (step) {
        case 1:
            return (
                <section className={componentClass}>
                    <Chapters
                        video={{
                            url: "https://www.youtube.com/embed/SqcY0GlETPk?si=-OHCyzVVo4sxSZVE",
                            start: 0,
                            end: 115
                        }}
                        heading={t('intro.heading')}
                        paragraph={t('intro.description')}
                    />
                </section>
            );
        case 2:
            return (
                <section className={componentClass}>
                    <Chapters
                        video={{
                            url: "https://www.youtube.com/embed/SqcY0GlETPk?si=-OHCyzVVo4sxSZVE",
                            start: 115,
                            end: 163
                        }}
                        heading={t('Prerequisites.heading')}
                        paragraph={t('Prerequisites.description')}
                    />
                </section>
            );
        case 3:
            return (
                <section className={componentClass}>
                    <Chapters
                        video={{
                            url: "https://www.youtube.com/embed/SqcY0GlETPk?si=-OHCyzVVo4sxSZVE",
                            start: 163,
                            end: 297
                        }}
                        heading={t('React_Overview.heading')}
                        paragraph={t('React_Overview.description')}
                    />
                </section>
            );
        case 4:
            return (
                <section className={componentClass}>
                    <Chapters
                        video={{
                            url: "https://www.youtube.com/embed/SqcY0GlETPk?si=-OHCyzVVo4sxSZVE",
                            start: 297,
                            end: 384
                        }}
                        heading={t('Development_Environment.heading')}
                        paragraph={t('Development_Environment.description')}
                    />
                </section>
            );
        case 5:
            return (
                <section className={componentClass}>
                    <Chapters
                        video={{
                            url: "https://www.youtube.com/embed/SqcY0GlETPk?si=-OHCyzVVo4sxSZVE",
                            start: 384,
                            end: 557
                        }}
                        heading={t('React_App.heading')}
                        paragraph={t('React_App.description')}
                    />
                </section>
            );
        case 6:
            return (
                <section className={componentClass}>
                    <Chapters
                        video={{
                            url: "https://www.youtube.com/embed/SqcY0GlETPk?si=-OHCyzVVo4sxSZVE",
                            start: 557,
                            end: 680
                        }}
                        heading={t('Project_Structure.heading')}
                        paragraph={t('Project_Structure.description')}
                    />
                </section>
            );
        case 7:
            return (
                <section className={componentClass}>
                    <Chapters
                        video={{
                            url: "https://www.youtube.com/embed/SqcY0GlETPk?si=-OHCyzVVo4sxSZVE",
                            start: 680,
                            end: 1001
                        }}
                        heading={t('React_Component.heading')}
                        paragraph={t('React_Component.description')}
                    />
                </section>
            );
        case 8:
            return (
                <section className={componentClass}>
                    <Chapters
                        video={{
                            url: "https://www.youtube.com/embed/SqcY0GlETPk?si=-OHCyzVVo4sxSZVE",
                            start: 1001,
                            end: 4803
                        }}
                        heading={t('React_Works.heading')}
                        paragraph={t('React_Works.description')}
                    />
                </section>
            );
        default:
            return (
                <section className={componentClass}>
                    <Chapters
                        video={{
                            url: "https://www.youtube.com/embed/SqcY0GlETPk?si=-OHCyzVVo4sxSZVE",
                            start: 0,
                            end: 50
                        }}
                        heading={t('intro.heading')}
                        paragraph={t('intro.description')}
                    />
                </section>
            );
    }
};
