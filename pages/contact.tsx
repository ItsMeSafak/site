import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { getPageData } from '../helpers/utils';
import me from '../data/me.json';

export const ContactPage = (): ReactElement => {
    const router = useRouter()
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string | undefined>('');
    const [button, setButton] = useState<string | undefined>('');
    const [mail, setMail] = useState<string>('');


    useEffect(() => {
        setTitle(getPageData(router.pathname).title);
        setDescription(getPageData(router.pathname).description);
        setButton(getPageData(router.pathname).button);
        setMail(`mailto: ${me.email}`);
    }, [router.pathname]);
    return (
        <div className='absolute flex items-center text-center flex-col left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-10 w-6/12'>
            <h1 className='text-6xl py-2 px-10 font-bold bg-blue'>{title}</h1>
            <p className='py-2 w-8/12 mb-5'>{description}</p>
            <a className='bg-blue shadow-md py-2 px-5 rounded-3xl' href={mail}>{button}</a>
        </div>
    );
}

export default ContactPage;