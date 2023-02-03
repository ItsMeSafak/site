import { ReactElement, useEffect, useState } from 'react';
import PageProps from '../types/page-props';

export const AboutPage = ({pageData}: PageProps): ReactElement => {
    const [title, setTitle] = useState<string>('');
    const [intro, setIntro] = useState<string | undefined>('');
    const [description, setDescription] = useState<string | undefined>('');


    useEffect(() => {
        setTitle(pageData.title);
        setIntro(pageData.intro);
        setDescription(pageData.description);
    }, [pageData]);

    return (
        <div className='flex flex-col bg-blue p-10 lg:w-6/12'>
            <h1 className='text-center text-4xl lg:text-6xl py-2 font-bold'>{title}</h1>
            <p className='py-2'>{intro}</p>
            <p className='py-2'>{description}</p>
        </div>
    );
}
    

export default AboutPage;