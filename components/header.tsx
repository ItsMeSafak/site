import { ReactElement, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Page } from '../types/page';
import { IconButton, MobileNav, Navbar } from '@material-tailwind/react';
import { Hamburger } from './hamburger';

interface HeaderProps {
    pages: Page[];
    firstName: string;
    lastName: string;
}

export const Header = ({pages, firstName, lastName}: HeaderProps)
: ReactElement<HeaderProps> => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            'resize',
            () => window.innerWidth >= 960 && setOpenNav(false)
          );
    }, [])

    const renderNavLinks = () => {
        return pages.map(page => {
            return (
                <li key={page.title}><Link onClick={() => {
                    if(window.innerWidth < 960) setOpenNav(!openNav)
                }} className='block lg:inline-block p-1 border-b-2 border-blue border-opacity-0 hover:border-opacity-100' href={page.path}>{page.navLink}</Link></li>
            );
        });
    }

    const renderNavList = () => (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {renderNavLinks()}
        </ul>
      );

    return (
        <header className='flex item-center flex-wrap p-6 sticky bg-black-200 text-black'>
            <Navbar className="text-white border-none shadow-none mx-auto max-w-screen-xl bg-black-200">
                <div className="mx-auto flex items-center justify-between">
                    <Link className='flex item-center hover:cursor-pointer' href='/'>
                        <Image className='mr-3' src='/logo.png' alt='Logo' width={50} height={50} />
                        <span className='pl-3 border-l-2 border-black leading-normal text-3xl font-bold dark:border-white'>{firstName} <span className='text-blue'>{lastName}</span></span>
                    </Link>
                    <div className="hidden lg:block">{renderNavList()}</div>
                    <IconButton
                        variant="text"
                        className="relative ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        <Hamburger open={openNav}/>
                    </IconButton>
                </div>
                <MobileNav open={openNav}>
                    <div className="mx-auto">
                    {renderNavList()}
                    </div>
                </MobileNav>
            </Navbar>
        </header>
    );
}

export default Header;