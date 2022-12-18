import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Safak Inan | Software Engineer</title>
                <meta
                    name="description"
                    content="Portfolio of Safak Inan, Software Engineer"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to{' '}
                    <a href="https://www.linkedin.com/in/safak-inan/">Me!</a>
                </h1>
            </main>
        </div>
    );
}
