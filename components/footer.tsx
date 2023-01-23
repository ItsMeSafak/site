import { ReactElement } from 'react';

export const Footer = (): ReactElement =>
    <footer className='mt-5 border border-white p-6'>
        <div className='h-28 mx-auto my-0 w-6/12 flex'>
            <div className='flex-1'>
                <span className='text-xl font-black'>Safak Inan</span>
                <p>Always looking for a new adventure</p>
            </div>
            <div className='flex-1'>
                <span className='text-xl font-black'>Social</span>
                <p>git/linkedin/email</p>
            </div>
        </div>
        <p className='w-fit mx-auto my-0 text-xs'>© 2022-2023 - Made by Safak Inan</p>
    </footer>

export default Footer;