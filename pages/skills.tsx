import { ReactElement, useEffect, useState } from 'react';
import { Skill } from '../types/skill';
import { SkillAccordion } from '../components/skill-accordion';
import PageProps from '../types/page-props';

export const SkillsPage = ({meData, pageData}: PageProps): ReactElement => {
    const [title, setTitle] = useState<string>('');
    const [skills, setSkills] = useState<Skill[]>([]);

    useEffect(() => {
        setTitle(pageData.title);
        setSkills(meData.skills);
    }, [meData, pageData]);

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
