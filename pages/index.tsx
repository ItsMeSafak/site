import Layout  from '../components/layout';
import LandingPage from './landing-page/landing-page';
import { ReactElement, useEffect, useState } from 'react';
import meData from '../data/me.json';
import pagesData from '../data/pages.json';
import { Page } from '../types/page';
import { Me } from '../types/me';


const Home = (): ReactElement => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');

    useEffect(() => {
        setFullName();
    }, []);

    const setFullName = () => {
        const { firstName, lastName } = meData as Me;
        setFirstName(firstName);
        setLastName(lastName);
    }

    const getPageData = (title: string) => {
        return pagesData.find(page => page.title === title) as Page;
    }

    return (
        <div className='flex flex-col p-5 min-h-screen'>
            <Layout>
                <LandingPage pageData={getPageData('Home')} fullName={`${firstName} ${lastName}`}/>
            </Layout>
        </div>
    );
}

export default Home;