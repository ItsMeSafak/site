import Link from 'next/link'
import { ReactElement } from 'react'

export const NotFoundPage = (): ReactElement =>
    <div className='flex items-center text-center flex-col p-10 lg:w-6/12'>
        <h1 className='text-2xl lg:text-5xl py-2 lg:px-10 font-bold bg-blue'>Houston, we have a problem...</h1>
        <p className='py-2 lg:w-8/12 mb-5'>Seems like you found the shadow real jimbo! Maybe you should head back <Link className='text-blue' href='/'>home.</Link></p>
    </div>

export default NotFoundPage