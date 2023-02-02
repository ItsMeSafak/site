import { ReactElement, useCallback, useEffect, useState } from 'react';
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

    const getNavLinks = useCallback(() => {
        if (pageData.data) {
            const pages = pageData.data as Page[];
            setNavLinks(
            pages.filter(link => link.navLink !== undefined));
        }
    }, [pageData.data]);

    const setFullName = useCallback(() => {
        if (meData.data) {
            const { firstName, lastName } = meData.data as Me;
            setFirstName(firstName);
            setLastName(lastName);
        }
    }, [meData.data])

    useEffect(() => {
        getNavLinks();
        setFullName();
    }, [pageData.data, meData.data, getNavLinks, setFullName]);

    const getFooterData = () => {
        if (pageData.data) {
            return pageData.data.find((page: { title: string; }) => page.title === 'Safak Inan') as Page;
        }
        return undefined;
    }

    return (
        <>
            <Header pages={navLinks} firstName={firstName} lastName={lastName}/>
                <div className='flex flex-auto flex-col justify-center items-center p-6'>
                    {children}
                </div>
            <Footer pageData={getFooterData()}/>
        </>
    );
}

export default Layout;