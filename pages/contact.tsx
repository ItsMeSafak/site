import { ReactElement, useEffect, useState } from 'react';
import PageProps from '../types/page-props';

export const ContactPage = ({meData, pageData}: PageProps): ReactElement => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string | undefined>('');
    const [button, setButton] = useState<string | undefined>('');
    const [mail, setMail] = useState<string>('');

    useEffect(() => {
        setTitle(pageData.title);
        setDescription(pageData.description);
        setButton(pageData.button);
        setMail(`mailto: ${meData.email}`);
    }, [meData, pageData]);
    
    return (
        <div className='flex flex-col items-center text-center p-10 lg:w-6/12'>
            <h1 className='text-4xl lg:text-6xl py-2 lg:px-7 font-bold bg-blue'>{title}</h1>
            <p className='py-2 lg:w-8/12 mb-5'>{description}</p>
            <a className='bg-blue shadow-md py-2 px-5 rounded-3xl' href={mail}>{button}</a>
        </div>
    );
}

export default ContactPage;