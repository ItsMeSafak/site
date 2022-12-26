import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = (): ReactElement => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Safak Inan | Software Engineer</title>
                <meta
                    name='description'
                    content='Portfolio of Safak Inan, Software Engineer'
                />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <meta name='robots' content='index, follow' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    <span>Hi</span> there!
                </h1>
                <p className={styles.description}>
                    Unfortunately the website is still in maintenence. 
                    However, feel free to contact me on my socials!</p>
                <div className={styles.icons}>
                    <a href='https://github.com/ItsMeSafak' target={'_blank'} rel='noreferrer'><FontAwesomeIcon icon={faGithub}/></a>
                    <a href='https://www.linkedin.com/in/safak-inan/' target={'_blank'} rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
            </main>
        </div>
    );
}

export default Home;