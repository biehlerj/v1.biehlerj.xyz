import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import MultiDate from "../../components/multiDate";
import {GetStaticProps} from "next";
import {getSortedExperienceData} from "../../lib/experience";

export default function Experience({ allExperienceData }) {
    return (
        <Layout pageName={"My Work Experience"}>
            <ul className={utilStyles.list}>
                {allExperienceData.map(({ id, beginDate, endDate, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/experience/${id}`}>
                            {title}
                        </Link>
                        <br/>
                        <small className={utilStyles.lightText}>
                            <MultiDate firstDateString={beginDate} secondDateString={endDate} />
                        </small>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allExperienceData = getSortedExperienceData();

    return {
        props: {
            allExperienceData,
        }
    };
};