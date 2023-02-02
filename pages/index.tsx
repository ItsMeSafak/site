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

    const setFullName = () => {
        const { firstName, lastName } = meData as Me;
        setFirstName(firstName);
        setLastName(lastName);
    }

    return (
        <div className='flex flex-col items-center text-center lg:w-5/12'>
            <h1 className='text-5xl lg:text-7xl w-10/12 py-2 border-b-4 border-blue font-bold'>{firstName} {lastName}</h1>
            <p className='py-2 w-8/12'>{description}</p>
        </div>
    );
}

export default Home;