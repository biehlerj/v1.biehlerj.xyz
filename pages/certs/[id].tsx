import {CertsData} from "../../types";
import Layout from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import MonthYearDate from "../../components/monthYearDate";
import {GetStaticPaths, GetStaticProps} from "next";
import {getAllCertsIds, getCertsData} from "../../lib/certs";

interface CertsHtml extends CertsData {
    contentHtml: string;
}

export default function Certs({
    certsData,
}: {
    certsData: CertsHtml;
}) {
    return (
        <Layout>
            <Head>
                <title>{certsData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{certsData.title}</h1>
                <div className={utilStyles.lightText}>
                    <MonthYearDate dateString={certsData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: certsData.contentHtml }} />
            </article>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllCertsIds();

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const certsData = await getCertsData(params.id as string);

    return {
        props: {
            certsData
        }
    };
};