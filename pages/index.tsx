import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import SocialIcons from "../components/SocialIcons";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingMd} ctp-mocha`}>
                <p>Hello my name is Jacob Biehler and I am a full-stack software engineer who is currently looking for work. I have experience working with technologies such as Typescript, React, Java, Python, Docker, and more.</p>
                <p>I am passionate about Linux and Open Source software. In my spare time I enjoy learning new programming languages and technologies, playing video games, going outdoors for a hike, bike ride, or camping, watching anime, and reading manga and light novels.</p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.inlineDisplay}`}>
                <Link href={"/experience"} style={{ paddingRight: "10px" }}>
                    <b>Experience</b>
                </Link>
                <br />
                <Link href={"/projects"} style={{ paddingRight: "10px" }}>
                    <b>Projects</b>
                </Link>
                <br />
                <Link href={"/education"} style={{ paddingRight: "10px" }}>
                    <b>Education</b>
                </Link>
            </section>
            <br />
            <footer>
                <SocialIcons />
            </footer>
        </Layout>
    );
}