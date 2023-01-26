import { ReactElement } from 'react';

interface WrapperProps {
    children: ReactElement;
}

export const Wrapper = (props: WrapperProps): ReactElement => 
    <div className='flex-auto relative p-6'>
        {props.children}
    </div>

export default Wrapper;