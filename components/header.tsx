import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Page } from '../types/page';

interface HeaderProps {
    pages: Page[];
    firstName: string;
    lastName: string;
}

export const Header = ({pages, firstName, lastName}: HeaderProps)
: ReactElement<HeaderProps> => {

    const mapNavLinks = () => {
        return pages.map(page => {
            return (
                <Link key={page.title} className='block lg:inline-block mx-3 px-5 py-2 border-b-2 border-blue border-opacity-0 hover:border-opacity-100' href={page.path}>{page.navLink}</Link>
            );
        });
    }

    return (
        <header className='flex item-center flex-wrap p-6 sticky top-5 border border-white mb-5'>
            <div className='absolute flex item-center'>
                <Image className='mr-3' src='/logo.png' alt='Logo' width={50} height={50} />
                <span className='pl-3 border-l-2 border-black leading-normal text-3xl font-bold dark:border-white'>{firstName} <span className='text-blue'>{lastName}</span></span>
            </div>
            {/* <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div> */}
            <div className='w-full block lg:flex lg:items-center lg:w-auto lg:mx-auto lg:my-0'>
                <div className='lg:flex-grow'>
                    {mapNavLinks()}
                </div>
            </div>
        </header>
    );
}

export default Header;