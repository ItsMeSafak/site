import { ReactElement, useEffect, useState } from 'react';
import { Project } from '../types/project';
import Card from '../components/card';
import PageProps from '../types/page-props';

export const ProjectsPage = ({meData, pageData}: PageProps): ReactElement => {
    const [title, setTitle] = useState<string>('');
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        setTitle(pageData.title);
        setProjects(meData.projects);  
    }, [meData, pageData]);

    const renderProjects = () => {
        return projects.map((project, index) => {
            return (
                <Card project={project} key={index} />
            );
        });
    }

    return (
        <div className='flex items-center flex-col lg:w-6/12'>
            <h1 className='text-center text-4xl lg:text-6xl py-2 px-3 lg:px-10 font-bold bg-blue mb-10'>{title}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {renderProjects()}
            </div>
        </div>
    );
}

export default ProjectsPage;