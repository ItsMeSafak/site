import { ReactElement, useEffect, useState } from 'react';
import { fetcher, getPageData } from '../helpers/utils';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export const AboutPage = (): ReactElement => {
    const router = useRouter()
    const [title, setTitle] = useState<string>('');
    const [intro, setIntro] = useState<string | undefined>('');
    const [description, setDescription] = useState<string | undefined>('');
    const { data } = useSWR('/api/page-data', fetcher);


    useEffect(() => {
        if(data) {
            setTitle(getPageData(data, router.pathname).title);
            setIntro(getPageData(data, router.pathname).intro);
            setDescription(getPageData(data, router.pathname).description);
        }
    }, [router.pathname, data]);

    return (
        <div className='flex flex-col bg-blue p-10 lg:w-6/12'>
            <h1 className='text-center text-4xl lg:text-6xl py-2 font-bold'>{title}</h1>
            <p className='py-2'>{intro}</p>
            <p className='py-2'>{description}</p>
        </div>
    );
}
    

export default AboutPage;