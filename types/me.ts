import { Project } from './project';
import { Skill } from './skill';
import { Social } from './social';

export interface Me {
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    jobTitle: string;
    skills: Skill[];
    projects: Project[];
    social: Social;
}