import { ReactElement, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Page } from '../types/page';
import { Me } from '../types/me';

interface FooterProps {
    pageData?: Page;
    meData?: Me;
}

export const Footer = ({pageData, meData}: FooterProps):
    ReactElement<FooterProps> =>{
    const [githubLink, setGithubLink] = useState<string | undefined>('');
    const [linkedInLink, setLinkedInLink] = useState<string | undefined>('');

    useEffect(() => {
        setGithubLink(meData?.social.github);
        setLinkedInLink(meData?.social.linkedin);
    }, [pageData, meData]);

    return (
        <footer className='flex flex-col items-center bg-black-200 p-6 text-white'>            
            <p className='w-fit mb-3 text-xs'>{pageData?.copyright}</p>
            <div className='text-lg'>
                <a className='mr-3' href={githubLink} target={'_blank'} rel='noreferrer'><FontAwesomeIcon icon={faGithub}/></a>
                <a className='mr-3' href={linkedInLink} target={'_blank'} rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
        </footer>
    );
}
    

export default Footer;