import { ReactElement, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { fetcher } from '../helpers/utils';
import useSWR from 'swr';
import { Page } from '../types/page';

interface FooterProps {
    pageData?: Page;
}

export const Footer = ({pageData}: FooterProps): ReactElement<FooterProps> =>{
    const [githubLink, setGithubLink] = useState<string>('');
    const [linkedInLink, setLinkedInLink] = useState<string>('');
    const meData = useSWR('/api/me-data', fetcher);

    useEffect(() => {
        if (meData.data && pageData) {
            setGithubLink(meData.data.social.github);
            setLinkedInLink(meData.data.social.linkedin);
        }
    }, [pageData, meData.data]);

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