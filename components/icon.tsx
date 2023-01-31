import { ReactElement } from 'react';
import Arrow from '../public/arrow.svg';

interface IconProps {
    id: number;
    open: number;
}

export const Icon = ({id, open}: IconProps): ReactElement => 
    <Arrow className={`${
        id != open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}/>
