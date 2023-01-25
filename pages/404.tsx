import Link from 'next/link'
import { ReactElement } from 'react'

export const NotFoundPage = (): ReactElement =>
    <div className='absolute flex items-center text-center flex-col left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-10 w-6/12'>
        <h1 className='text-5xl py-2 px-10 font-bold bg-blue'>Houston, we have a problem...</h1>
        <p className='py-2 w-8/12 mb-5'>Seems like you found the shadow real jimbo! Maybe you should head back <Link className='text-blue' href='/'>home.</Link></p>
    </div>

export default NotFoundPage