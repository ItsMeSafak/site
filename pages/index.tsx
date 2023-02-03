import { ReactElement, useCallback, useEffect, useState } from 'react';
import PageProps from '../types/page-props';


const Home = ({meData, pageData}: PageProps): ReactElement => {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string | undefined>('');
    
    const setFullName = useCallback(() => {
        const { firstName, lastName } = meData;
        setName(`${firstName} ${lastName}`);
    }, [meData]);

    useEffect(() => {
        setFullName();
        setDescription(pageData.description);
    }, [setFullName, pageData]);

    return (
        <div className='flex flex-col items-center text-center lg:w-5/12'>
            <h1 className='text-5xl lg:text-7xl w-10/12 py-2 border-b-4 border-blue font-bold'>{name}</h1>
            <p className='py-2 w-8/12'>{description}</p>
        </div>
    );
}

export default Home;