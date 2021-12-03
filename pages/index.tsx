import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.sass";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Rebecca Iskandar</title>
                <meta
                    name="description"
                    content="Rebecca Iskandar's Website | Coded with ❤️ by Nyx Iskandar"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Rebecca Iskandar</h1>
                <Image
                    src="/rebecca.jpg"
                    alt="Rebecca's Profile Picture"
                    width={300}
                    height={300}
                />
                <p className={styles.text}>About</p>
                <Link href="/artworks">
                    <a className={styles.link}>Check out my art</a>
                </Link>
            </main>
        </div>
    );
};

export default Home;
