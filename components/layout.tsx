import { ReactElement, useEffect, useState } from 'react';
import Wrapper from './wrapper';
import Header from './header';
import Footer from './footer';
import { Me } from '../types/me';
import { Page } from '../types/page';
import { fetcher } from '../helpers/utils';
import useSWR from 'swr';

interface LayoutProps {
    children: ReactElement;
}

export const Layout = ({children}: LayoutProps)
    : ReactElement<LayoutProps> => {
    const [navLinks, setNavLinks] = useState<Page[]>([]);
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const meData = useSWR('/api/me-data', fetcher);
    const pageData = useSWR('/api/page-data', fetcher);

    useEffect(() => {
        console.log(meData);
        console.log(pageData);
        getNavLinks();
        setFullName();
    }, []);

    const getNavLinks = () => {
        const pages = pageData.data as Page[];
        setNavLinks(
            pages.filter(link => link.navLink !== undefined));
    }

    const setFullName = () => {
        const { firstName, lastName } = meData.data as Me;
        setFirstName(firstName);
        setLastName(lastName);
    }

    return (
        <>
            <Header pages={navLinks} firstName={firstName} lastName={lastName}/>
                <div className='flex flex-auto flex-col justify-center items-center p-6'>
                    {children}
                </div>
            <Footer/>
        </>
    );
}

export default Layout;