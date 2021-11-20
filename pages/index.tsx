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
                <sub>Hmm... the picture seems to be bouncing... why don't you hover over it?</sub>
                <div className={styles.container}>
                    <div className={styles.smallContainer}>
                        <Link href="/poems">
                            <a className={styles.link}>Poems</a>
                        </Link>
                        <Link href="/fiction">
                            <a className={styles.link}>Fiction</a>
                        </Link>
                    </div>
                    <Image
                        src="/rebecca.jpg"
                        alt="Rebecca's Profile Picture"
                        className={styles.bounce}
                        width={300}
                        height={300}
                    />
                    <div className={styles.smallContainer}>
                        <Link href="/reviews">
                            <a className={styles.link}>Reviews</a>
                        </Link>
                        <Link href="/artworks">
                            <a className={styles.link}>Artworks</a>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
