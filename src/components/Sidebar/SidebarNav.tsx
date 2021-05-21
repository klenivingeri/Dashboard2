import { BsHouseFill, BsBullseye, BsTools, BsMap, BsFillTagFill } from 'react-icons/bs';

import { ReactNode } from 'react';
 
interface NavSectionProps{
    title: string;
    children: ReactNode;
}

import { NavLink } from './NavLink';
export function SidebarNav({title, children }: NavSectionProps){
    return(
        <>
            <NavLink icon={BsHouseFill} href="/"  >Home</NavLink>
            <NavLink icon={BsBullseye} href="/okr" >Okr</NavLink>
            <NavLink icon={BsTools} href="/initiatives" >Initiatives</NavLink>
            <NavLink icon={BsMap} href="/roadmap" >Roadmap</NavLink>
            <NavLink icon={BsFillTagFill} href="/more" >More</NavLink>

        </>
    )
}