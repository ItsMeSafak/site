import { ReactElement, useCallback, useEffect, useState } from 'react';
import { Me } from '../types/me';
import { fetcher, getPageData } from '../helpers/utils';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const Home = (): ReactElement => {
    const router = useRouter()
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [description, setDescription] = useState<string | undefined>('');
    const meData = useSWR('/api/me-data', fetcher);
    const pageData = useSWR('/api/page-data', fetcher);
    
    const setFullName = useCallback(() => {
        const { firstName, lastName } = meData.data as Me;
        setFirstName(firstName);
        setLastName(lastName);
    }, [meData]);

    useEffect(() => {
        if(meData.data && pageData.data) {
            setFullName();
            setDescription(
                getPageData(pageData.data, router.pathname).description);
        }
    }, [router.pathname, setFullName, pageData.data, meData.data]);

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