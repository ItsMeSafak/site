import { ReactElement, useCallback, useEffect, useState } from 'react';
import Header from './header';
import Footer from './footer';
import { Me } from '../types/me';
import { Page } from '../types/page';
import { fetcher, getPageData } from '../helpers/utils';
import { ME_DATA_URL, PAGE_DATA_URL } from '../helpers/constants';
import useSWR from 'swr';
import React from 'react';
import { useRouter } from 'next/router';

interface LayoutProps {
    children: ReactElement;
}

export const Layout = ({children}: LayoutProps):
    ReactElement<LayoutProps> => {
    const router = useRouter()
    const [navLinks, setNavLinks] = useState<Page[]>([]);
    const [footerData, setFooterData] = useState<Page>();
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');

    const meData = useSWR(ME_DATA_URL, fetcher);
    const pageData = useSWR(PAGE_DATA_URL, fetcher);

    const getNavLinks = useCallback(() => {
        const pages = pageData.data as Page[];
        setNavLinks(pages.filter(link => link.navLink !== undefined));
    }, [pageData.data]);

    const setFullName = useCallback(() => {
        const { firstName, lastName } = meData.data as Me;
        setFirstName(firstName);
        setLastName(lastName);
    }, [meData.data]);

    const getFooterData = useCallback(() => {
        setFooterData(pageData.data.find((page: { title: string; }) => page.title === 'Safak Inan') as Page);
    }, [pageData.data]);

    const childrenWithProps = React.Children.map(children, child => {
        if (pageData.data && meData.data) {
            const props = { 
                pageData: getPageData(pageData.data as Page[], router.pathname),
                meData: meData.data as Me 
            }; 
            return React.isValidElement(child) ? 
                React.cloneElement(child, props) : child;
        }
      });

    useEffect(() => {
        if (pageData.data && meData.data) {
            getNavLinks();
            setFullName();
            getFooterData();
        }
    }, [pageData.data, meData.data, getNavLinks, setFullName, getFooterData]);

    return (
        <div className='flex flex-col min-h-screen'>
            <Header pages={navLinks} firstName={firstName} lastName={lastName}/>
                <div className='flex flex-auto flex-col justify-center items-center p-6'>
                    {childrenWithProps}
                </div>
            <Footer pageData={footerData} meData={meData.data as Me}/>
        </div>
    );
}

export default Layout;