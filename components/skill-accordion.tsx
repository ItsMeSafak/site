import { ReactElement, useState } from 'react';
import { Skill } from '../types/skill';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from '@material-tailwind/react';
import { Icon } from './icon';
import Image from 'next/image';

interface AccordionProps {
    skill: Skill;
}

export const SkillAccordion = ({skill}: AccordionProps): ReactElement => {
    const [open, setOpen] = useState(0);

    const renderAttributes = () => {
        return skill.attributes.map((attribute) => {
            return <div className='w-full flex justify-between py-2' key={attribute.name}><span>{attribute.name}</span><Image src={attribute.iconUrl} width={25} height={25} alt='logo' /></div>
        });
    }
    
    return (
        <div id={skill.name} className='flex flex-col text-left bg-white text-black p-5 text-ellipsis overflow-hidden shadow-3xl border-black-200 h-fit'>
            <Accordion open={open == 1} 
                icon={<Icon id={0} open={open} />}>
                <AccordionHeader onClick={() => 
                    setOpen(() => open == 1 ? 0 : 1)}>
                <span className='text-left font-bold w-full'>{skill.name}</span>
                </AccordionHeader>
                <AccordionBody>
                    {renderAttributes()}
                </AccordionBody>
            </Accordion>
        </div>
    );
}

    
export default SkillAccordion;