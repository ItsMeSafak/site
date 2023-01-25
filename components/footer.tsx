import { ReactElement, useEffect, useState } from 'react';
import { Page } from '../types/page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import meData from '../data/me.json';

interface FooterProps {
    pageData: Page;
}

export const Footer = ({pageData}: FooterProps): ReactElement<FooterProps> =>{
    const [githubLink, setGithubLink] = useState<string>('');
    const [linkedInLink, setLinkedInLink] = useState<string>('');

    useEffect(() => {
        setGithubLink(meData.social.github);
        setLinkedInLink(meData.social.linkedin);
    }, []);
    return (
        <footer className='mt-5 border border-white p-6'>
            <div className='h-28 mx-auto my-0 w-6/12 flex'>
                <div className='flex-1'>
                    <span className='text-xl font-black'>{pageData.title}</span>
                    <p>{pageData.description}</p>
                </div>
                <div className='flex-1'>
                    <span className='text-xl font-black'>{pageData.subtitle}</span>
                    <div className='text-xl'>
                        <a className='mr-3' href={githubLink} target={'_blank'} rel='noreferrer'><FontAwesomeIcon icon={faGithub}/></a>
                        <a className='mr-3' href={linkedInLink} target={'_blank'} rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                </div>
            </div>
            <p className='w-fit mx-auto my-0 text-xs'>{pageData.copyright}</p>
        </footer>
    );
}
    

export default Footer;