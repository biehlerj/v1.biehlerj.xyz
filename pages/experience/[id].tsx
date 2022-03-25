import Layout from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import MultiDate from "../../components/multiDate";
import {GetStaticPaths, GetStaticProps} from "next";
import {getAllExperienceIds, getExperienceData} from "../../lib/experience";


export default function Experience ({
    experienceData
}: {
    experienceData: {
        title: string
        beginDate: string
        endDate: string
        contentHtml: string
    }
}) {
    return (
        <Layout>
            <Head>
                <title>{experienceData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{experienceData.title}</h1>
                <div className={utilStyles.lightText}>
                    <MultiDate
                        firstDateString={experienceData.beginDate}
                        secondDateString={experienceData.endDate}
                    />
                </div>
                <div dangerouslySetInnerHTML={{ __html: experienceData.contentHtml }} />
            </article>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllExperienceIds();
    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const experienceData = await getExperienceData(params.id as string);
    return {
        props: {
            experienceData
        }
    };
};