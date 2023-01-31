import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { fetcher, getPageData } from '../helpers/utils';
import { Skill } from '../types/skill';
import { SkillAccordion } from '../components/skill-accordion';
import useSWR from 'swr';

export const SkillsPage = (): ReactElement => {
    const router = useRouter()
    const [title, setTitle] = useState<string>('');
    const [skills, setSkills] = useState<Skill[]>([]);
    const meData = useSWR('/api/me-data', fetcher);
    const pageData = useSWR('/api/page-data', fetcher);

    useEffect(() => {
        setTitle(getPageData(pageData.data, router.pathname).title);
        setSkills(meData.data.skills);
    }, [router.pathname, meData, pageData]);

    const renderSkills = () => {
        return skills.map((skill, index) => {
            return (
                <SkillAccordion skill={skill} key={index} />
            );
        });
    }

    return (
        <div className='flex items-center flex-col w-full lg:p-10 lg:w-6/12'>
            <h1 className='text-4xl lg:text-6xl py-2 px-10 font-bold bg-blue mb-10'>{title}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 h-full w-full'>
                {renderSkills()}
            </div>
        </div>
    );
}

export default SkillsPage;
