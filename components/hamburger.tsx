import { ReactElement } from 'react';
import HamburgerIcon from '../public/hamburger.svg';
import CloseIcon from '../public/close.svg'

interface HamburgerProps {
    open: boolean;
}

export const Hamburger = ({open}: HamburgerProps): ReactElement =>
  <>
  {open ? (
      <CloseIcon />
    ) : (
      <HamburgerIcon />
    )}
  </>

export default Hamburger;