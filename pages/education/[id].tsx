import {EducationData} from "../../types";
import Layout from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import MultiDate from "../../components/multiDate";
import {GetStaticPaths, GetStaticProps} from "next";
import {getAllEducationIds, getEducationData} from "../../lib/education";

interface EducationHtml extends EducationData {
    contentHtml: string;
}

export default function Education({
    educationData,
}: {
    educationData: EducationHtml;
}) {
    return (
        <Layout>
            <Head>
                <title>{educationData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{educationData.title}</h1>
                <div className={utilStyles.lightText}>
                    <MultiDate
                        firstDateString={educationData.beginDate}
                        secondDateString={educationData.endDate}
                    />
                    <br/>
                    {educationData.degree}
                    <br/>
                    {educationData.location}
                </div>
                <div dangerouslySetInnerHTML={{__html: educationData.contentHtml}}/>
            </article>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllEducationIds();

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
    const educationData = await getEducationData(params.id as string);
    return {
        props: {
            educationData
        }
    };
};