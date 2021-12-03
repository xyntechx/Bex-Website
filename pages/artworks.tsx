import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.sass";
import grid from "../styles/Grid.module.sass";

const Artworks: NextPage = () => {
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

            <main className={grid.artworkGrid}>
                <div className={grid.card}>
                    <Image
                        src="/artwork-1.png"
                        alt="Artwork 1"
                        layout="fill"
                        className={grid.image}
                    />
                </div>
                <div className={grid.card}>
                    <Image
                        src="/artwork-2.png"
                        alt="Artwork 1"
                        layout="fill"
                        className={grid.image}
                    />
                </div>
                <div className={grid.card}>
                    <Image
                        src="/artwork-3.png"
                        alt="Artwork 1"
                        layout="fill"
                        className={grid.image}
                    />
                </div>
                <div className={grid.card}>
                    <Image
                        src="/artwork-4.png"
                        alt="Artwork 1"
                        layout="fill"
                        className={grid.image}
                    />
                </div>
                <div className={grid.card}>
                    <Image
                        src="/artwork-5.png"
                        alt="Artwork 1"
                        layout="fill"
                        className={grid.image}
                    />
                </div>
                <div className={grid.card}>
                    <Image
                        src="/artwork-6.png"
                        alt="Artwork 1"
                        layout="fill"
                        className={grid.image}
                    />
                </div>
                <div className={grid.card}>
                    <Image
                        src="/artwork-7.png"
                        alt="Artwork 1"
                        layout="fill"
                        className={grid.image}
                    />
                </div>
                <div className={grid.card}>
                    <Image
                        src="/artwork-8.png"
                        alt="Artwork 1"
                        layout="fill"
                        className={grid.image}
                    />
                </div>
                <div className={grid.card}>
                    <Image
                        src="/artwork-9.png"
                        alt="Artwork 1"
                        layout="fill"
                        className={grid.image}
                    />
                </div>
                <div className={grid.card}>
                    <Image
                        src="/artwork-10.png"
                        alt="Artwork 1"
                        layout="fill"
                        className={grid.image}
                    />
                </div>
                <div className={grid.card}>
                    <Image
                        src="/artwork-11.png"
                        alt="Artwork 1"
                        layout="fill"
                        className={grid.image}
                    />
                </div>
                <div className={grid.card}>
                    <Image
                        src="/artwork-12.gif"
                        alt="Artwork 1"
                        layout="fill"
                        className={grid.image}
                    />
                </div>
                <div className={grid.card}>
                    <Image
                        src="/artwork-13.gif"
                        alt="Artwork 1"
                        layout="fill"
                        className={grid.image}
                    />
                </div>
                <div className={grid.card}>
                    <Image
                        src="/artwork-14.png"
                        alt="Artwork 1"
                        layout="fill"
                        className={grid.image}
                    />
                </div>
                <div className={grid.card}>
                    <Image
                        src="/artwork-15.png"
                        alt="Artwork 1"
                        layout="fill"
                        className={grid.image}
                    />
                </div>
                <div className={grid.card}>
                    <Image
                        src="/artwork-16.png"
                        alt="Artwork 1"
                        layout="fill"
                        className={grid.image}
                    />
                </div>
                <div className={grid.card}>
                    <Image
                        src="/artwork-17.png"
                        alt="Artwork 1"
                        layout="fill"
                        className={grid.image}
                    />
                </div>
                <div className={grid.card}>
                    <Image
                        src="/artwork-18.png"
                        alt="Artwork 1"
                        layout="fill"
                        className={grid.image}
                    />
                </div>
                <div className={grid.card}>
                    <Image
                        src="/artwork-19.png"
                        alt="Artwork 1"
                        layout="fill"
                        className={grid.image}
                    />
                </div>
                <div className={grid.card}>
                    <Image
                        src="/artwork-20.png"
                        alt="Artwork 1"
                        layout="fill"
                        className={grid.image}
                    />
                </div>
                <div className={grid.card}>
                    <Image
                        src="/artwork-21.png"
                        alt="Artwork 1"
                        layout="fill"
                        className={grid.image}
                    />
                </div>
                <div className={grid.card}>
                    <Image
                        src="/artwork-22.png"
                        alt="Artwork 1"
                        layout="fill"
                        className={grid.image}
                    />
                </div>
            </main>
        </div>
    );
};

export default Artworks;
