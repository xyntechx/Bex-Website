import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
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
                <div className={styles.profilePic}>Rebecca Iskandar</div>
                <div className={styles.link}>placeholder link :0</div>
            </main>
        </div>
    );
};

export default Home;
