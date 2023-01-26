import { ReactElement } from 'react'
import { Project } from '../types/project'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface CardProps {
    project: Project;
    key: number;
}

export const Card = ({project, key}: CardProps)
    : ReactElement<CardProps> =>
    <div key={key} className='flex flex-col text-left bg-blue p-5 h-48 text-ellipsis overflow-hidden shadow-3xl'>
        <h1 className='text-xl py-2 font-bold'>{project.title}</h1>
        <p className='flex-1 py-2'>{project.description}</p>
        {project.url &&
            <a className='text-lg ml-auto w-fit transition-all ease-in-out duration-300 hover:scale-110' href={project.url} target={'_blank'} rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a>}
    </div>

export default Card