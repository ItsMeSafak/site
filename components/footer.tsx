import { ReactElement } from 'react';
import { Page } from '../types/page';

interface FooterProps {
    pageData: Page;
}

export const Footer = ({pageData}: FooterProps): ReactElement<FooterProps> =>
    <footer className='mt-5 border border-white p-6'>
        <div className='h-28 mx-auto my-0 w-6/12 flex'>
            <div className='flex-1'>
                <span className='text-xl font-black'>{pageData.title}</span>
                <p>{pageData.description}</p>
            </div>
            <div className='flex-1'>
                <span className='text-xl font-black'>{pageData.subtitle}</span>
                <p>git/linkedin/email</p>
            </div>
        </div>
        <p className='w-fit mx-auto my-0 text-xs'>{pageData.copyright}</p>
    </footer>

export default Footer;