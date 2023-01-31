import { ReactElement, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { fetcher } from '../helpers/utils';
import useSWR from 'swr';
import { Page } from '../types/page';

interface FooterProps {
    pageData: any;
}

const fetcher = (url: string) => fetch(url).then((res) => {
    console.log('test');
    return res.json()
});

export const Footer = (): ReactElement<FooterProps> =>{
    const [githubLink, setGithubLink] = useState<string>('');
    const [linkedInLink, setLinkedInLink] = useState<string>('');
    const { data } = useSWR('/api/me-data', fetcher);
    const pageData = useSWR('/api/page-data', fetcher);

    useEffect(() => {
        if (data) {
            setGithubLink(data.social.github);
            setLinkedInLink(data.social.linkedin);
        }
        getFooterData();
    }, []);

    const getFooterData = () => {
        if (pageData.data) {
            console.log('ewewewewewew');
        console.log(pageData);
        console.log(pageData.data.find((page: { title: string; }) => page.title === 'Safak Inan') as Page);
        }
    }

    return (
        <footer className='flex flex-col items-center bg-black-200 p-6 text-white'>            
            <p className='w-fit mb-3 text-xs'>{pageData?.data?.copyright}</p>
            <div className='text-lg'>
                <a className='mr-3' href={githubLink} target={'_blank'} rel='noreferrer'><FontAwesomeIcon icon={faGithub}/></a>
                <a className='mr-3' href={linkedInLink} target={'_blank'} rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
        </footer>
    );
}
    

export default Footer;