import { ReactElement, useEffect, useState } from 'react';
import meData from '../data/me.json';
import { Me } from '../types/me';
import { getPageData } from '../helpers/utils';
import { useRouter } from 'next/router';

const Home = (): ReactElement => {
    const router = useRouter()
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [description, setDescription] = useState<string | undefined>('');
    
    useEffect(() => {
        setFullName();
        setDescription(getPageData(router.pathname).description);
    }, [router.pathname]);

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