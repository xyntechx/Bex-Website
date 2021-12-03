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
                <br />
                <br />
                <p className={styles.intro}>
                    Hello there 👋 Welcome to my website
                </p>
                <p className={styles.text}>
                    I&apos;m Rebecca, a positive, energetic, and warm teen who
                    loves{" "}
                    <Link href="/artworks">
                        <a target="_blank" className={styles.link}>
                            art
                        </a>
                    </Link>
                    . In fact, I am a member of the Art Club of Raffles
                    Girls&apos; School (Secondary) where I explore and develop
                    my artistic skills. Sometimes, you can spot me drawing
                    either digitally or on paper, or listening to pop music.
                    More often, it&apos;s both! I also enjoy watching K-Dramas,
                    Hollywood films, as well as animations - be it Anime or
                    Disney. Frankly, I see myself as someone who doesn&apos;t
                    have a specific preference for anything such as food,
                    movies, fashion, aesthetics or even art style; I&apos;m
                    someone who simply loves to experiment with and have a
                    little taste of everything, making me somewhat of a
                    jack-of-all-trades. This may be caused by my endless
                    curiosity and restlessness (or my indecisiveness 👀). Either
                    way, I&apos;m someone who constantly looks for new
                    experiences, never settling with just one constant.
                </p>
                <br />
                <br />
                <div className={styles.social}>
                    Follow me on{" "}
                    <Link href="https://www.instagram.com/olegna_s/">
                        <a target="_blank">
                            <Image
                                src="/instagram.png"
                                alt="Instagram"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default Home;
