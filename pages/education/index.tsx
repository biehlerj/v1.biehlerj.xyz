import Link from "next/link";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import MultiDate from "../../components/multiDate";
import MonthYearDate from "../../components/monthYearDate";
import {GetStaticProps} from "next";
import {getSortedEducationData} from "../../lib/education";
import {getSortedCertsData} from "../../lib/certs";

export default function Education({allEducationData, allCertsData}) {
    return (
        <Layout pageName={"My Education and Certifications"}>
            <h2 className={utilStyles.headingLg}>Degrees</h2>
            <ul className={utilStyles.list}>
                {allEducationData.map(({id, title, beginDate, endDate, location, degree}) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/education/${id}`}>
                            {title}
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>
                            <MultiDate firstDateString={beginDate} secondDateString={endDate}/>
                            <br />
                            {location}
                            <br />
                            {degree}
                        </small>
                    </li>
                ))}
            </ul>
            <h2 className={utilStyles.headingLg}>Certifications</h2>
            <ul className={utilStyles.list}>
                {allCertsData.map(({ id, title, date }) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/certs/${id}`}>
                            {title}
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>
                            <MonthYearDate dateString={date} />
                        </small>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allEducationData = getSortedEducationData();
    const allCertsData = getSortedCertsData();
    
    return {
        props: {
            allEducationData,
            allCertsData,
        }
    };
};