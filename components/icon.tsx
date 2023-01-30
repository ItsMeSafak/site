import { ReactElement } from 'react';
import Image from 'next/image';
import arrow from '../public/arrow.svg';

interface IconProps {
    id: number;
    open: number;
}

export const Icon = ({id, open}: IconProps): ReactElement => 
    <Image className={`${
        id == open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
      src={arrow} alt='icon'/>
