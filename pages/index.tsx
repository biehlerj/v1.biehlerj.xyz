import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { getSortedProjectsData } from "../lib/projects";
import utilStyles from "../styles/utils.module.css";
import {getSortedExperienceData} from "../lib/experience";
import MultiDate from "../components/multiDate";

interface IndexProps {
    allPostsData: {
        date: string;
        title: string;
        id: string;
    }[];
    allExperienceData: {
        beginDate: string;
        endDate: string;
        title: string;
        id: string;
    }[]
}

export default function Home({
    allPostsData,
    allExperienceData
}: IndexProps) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Hello my name is Jacob Biehler and I am a software engineer. I currently work for <a href="https://www.moesol.com/" target="_blank" rel="noreferrer">Moebius Solutions</a> working with technologies such as Typescript, React, Java, Python, Docker, and more.</p>
                <p>I am passionate about Linux and Open Source software. In my spare time I enjoy learning new programming languages and technologies, playing video games, going outdoors for a hike, bike ride, or camping, watching anime, and reading manga and light novels.</p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Professional Experience</h2>
                <ul className={utilStyles.list}>
                    {allExperienceData.map(({ id, beginDate, endDate, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/experience/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br/>
                            <small className={utilStyles.lightText}>
                                <MultiDate firstDateString={beginDate} secondDateString={endDate} />
                            </small>
                        </li>
                    ))}
                </ul>
                <h2 className={utilStyles.headingLg}>My Open Source Contributions:</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/projects/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedProjectsData();
    const allExperienceData = getSortedExperienceData();
    return {
        props: {
            allPostsData,
            allExperienceData
        }
    };
};