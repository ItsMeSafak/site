import { ReactElement, useCallback, useEffect, useState } from 'react';
import { Me } from '../types/me';
import { fetcher, getPageData } from '../helpers/utils';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Page } from '../types/page';

const Home = (): ReactElement => {
    const router = useRouter()
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [description, setDescription] = useState<string | undefined>('');
    const meData = useSWR('/api/me-data', fetcher);
    const pageData = useSWR('/api/page-data', fetcher);
    
    const setFullName = useCallback(() => {
        if (meData.data) {
            const { firstName, lastName } = meData.data as Me;
            setFirstName(firstName);
            setLastName(lastName);
        }
    }, [meData]);

    useEffect(() => {
        setFullName();
        if(pageData.data) {
            console.log((pageData.data as Page));
            setDescription(
                getPageData(pageData.data, router.pathname).description);
        }
    }, [router.pathname, setFullName, pageData]);

    return (
        <div className='flex flex-col items-center text-center lg:w-5/12'>
            <h1 className='text-5xl lg:text-7xl w-10/12 py-2 border-b-4 border-blue font-bold'>{firstName} {lastName}</h1>
            <p className='py-2 w-8/12'>{description}</p>
        </div>
    );
}

export default Home;