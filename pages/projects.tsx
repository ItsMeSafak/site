import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { getPageData } from '../helpers/utils';
import { Project } from '../types/project';
import meData from '../data/me.json';
import Card from '../components/card';

export const ProjectsPage = (): ReactElement => {
    const router = useRouter()
    const [title, setTitle] = useState<string>('');
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        setTitle(getPageData(router.pathname).title);
        setProjects(meData.projects);
    }, [router.pathname]);

    const renderProjects = () => {
        return projects.map((project, index) => {
            return (
                <Card project={project} key={index} />
            );
        });
    }

    return (
        <div className='absolute flex items-center flex-col left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-10 w-6/12'>
            <h1 className='text-6xl py-2 px-10 font-bold bg-blue mb-10'>{title}</h1>
            <div className='grid grid-cols-3 gap-5 h-full'>
                {renderProjects()}
            </div>
        </div>
    );
}

export default ProjectsPage;