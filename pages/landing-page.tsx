import { ReactElement } from 'react';

export const LandingPage = (): ReactElement =>
    <div className='absolute flex flex-col items-center text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-full w-5/12'>
        <h1 className='text-7xl w-10/12 py-2 border-b-4 border-blue font-bold'>Safak Inan</h1>
        <p className='py-2 w-8/12'>A young developer, with a creative brain, developing awesome software for awesome people. </p>
    </div>;

export default LandingPage;