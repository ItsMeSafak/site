import { ReactElement, useEffect, useState } from 'react';
import Wrapper from './wrapper';
import Header from './header';
import Footer from './footer';
import meData from '../data/me.json';
import pagesData from '../data/pages.json';
import { Me } from '../types/me';
import { Page } from '../types/page';

interface LayoutProps {
    children: ReactElement;
}

export const Layout = ({children}: LayoutProps)
    : ReactElement<LayoutProps> => {
    const [navLinks, setNavLinks] = useState<Page[]>([]);
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');

    useEffect(() => {
        getNavLinks();
        setFullName();
    }, []);

    const getNavLinks = () => {
        const pages = pagesData as Page[];
        setNavLinks(
            pages.filter(link => link.navLink !== undefined));
    }

    const setFullName = () => {
        const { firstName, lastName } = meData as Me;
        setFirstName(firstName);
        setLastName(lastName);
    }

    const getFooterData = () => {
        return pagesData.find(page => page.title === 'Safak Inan') as Page;
    }

    return (
        <>
            <Header pages={navLinks} firstName={firstName} lastName={lastName}/>
                <Wrapper>
                    {children}
                </Wrapper>
            <Footer pageData={getFooterData()}/>
        </>
    );
}

export default Layout;