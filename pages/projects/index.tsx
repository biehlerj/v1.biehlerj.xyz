import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Date from "../../components/date";
import {GetStaticProps} from "next";
import {getSortedProjectsData} from "../../lib/projects";
import Layout from "../../components/layout";

export default function Projects({ allProjectsData }) {
    return (
        <Layout pageName={"Projects I work on or Contribute to"}>
            <ul className={utilStyles.list}>
                {allProjectsData.map(({id, date, title}) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/projects/${id}`}>
                            <a>{title}</a>
                        </Link>
                        <br/>
                        <small className={utilStyles.lightText}>
                            <Date dateString={date}/>
                        </small>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allProjectsData = getSortedProjectsData();

    return {
        props: {
            allProjectsData,
        }
    };
};