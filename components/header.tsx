import { ReactElement } from 'react';
import Image from 'next/image';

export const Header = (): ReactElement => 
    <header className='flex item-center justify-between flex-wrap p-6 sticky top-0 shadow-lg'>
        <div className='flex item-center'>
            <Image className='mr-3' src='/logo.png' alt='Logo' width={50} height={50} />
            <span className='pl-3 border-l-2 border-black leading-normal text-3xl font-bold dark:border-white'>Safak <span className='text-blue'>Inan</span></span>
        </div>
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div className='w-full block lg:flex lg:items-center lg:w-auto'>
            <div className='lg:flex-grow'>
                <a className='block lg:inline-block mr-6 py-2 border-b-2 border-blue border-opacity-0 hover:border-opacity-100' href='#home'>Home</a>
                <a className='block lg:inline-block mr-6 py-2 border-b-2 border-blue border-opacity-0 hover:border-opacity-100' href='#about'>About</a>
                <a className='block lg:inline-block mr-6 py-2 border-b-2 border-blue border-opacity-0 hover:border-opacity-100' href='#projects'>Projects</a>
                <a className='block lg:inline-block mr-6 py-2 border-b-2 border-blue border-opacity-0 hover:border-opacity-100' href='#contact'>Contact</a>
            </div>
        </div>
    </header>

export default Header;