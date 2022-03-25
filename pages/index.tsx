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
            <section className={utilStyles.headingMd}>
                <p>Hello my name is Jacob Biehler and I am a software engineer. I currently work for <a href="https://www.moesol.com/" target="_blank" rel="noreferrer">Moebius Solutions</a> working with technologies such as Typescript, React, Java, Python, Docker, and more.</p>
                <p>I am passionate about Linux and Open Source software. In my spare time I enjoy learning new programming languages and technologies, playing video games, going outdoors for a hike, bike ride, or camping, watching anime, and reading manga and light novels.</p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <Link href={"/experience"}>
                    <a><b>Experience</b></a>
                </Link>
                <br />
                <Link href={"/projects"} >
                    <a><b>Projects</b></a>
                </Link>
                <br />
                <Link href={"/education"}>
                    <a><b>Education</b></a>
                </Link>
            </section>
            <br />
            <footer>
                <SocialIcons />
            </footer>
        </Layout>
    );
}