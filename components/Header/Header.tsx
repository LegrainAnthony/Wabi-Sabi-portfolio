'use client'
import { FontStyle, GlobalStyle, HeaderStyle } from "@/styles";
import Image from "next/image";
import { NavigationMobile } from "./Navigation/nav_mobile";
import { CustomImage } from "../UI";
import { useEffect, useState } from "react";
import { useMatchMedia } from "@/hooks";
import { NavigationDesktop } from "./Navigation/nav_desktop";
import Link from "next/link";

interface HeaderProps {
 className?: string
};




export const Header : React.FC<HeaderProps> = ({className}) => {
    const [navMobileActive, setNavMobileActive] = useState(false);
    const [displayMobileHeader, setDisplayMobileHeader] = useState(false)

return (
    <div className={`${HeaderStyle.container} ${className}`}>
        <Link href={'/'} className={`${GlobalStyle.link}`}>
       <p className={`${HeaderStyle.name} ${FontStyle.jap}`}>
        Léa Beauchamp
        </p>
        </Link>
        <CustomImage 
        classNameContainer={`${HeaderStyle.flower__container} ${navMobileActive ? `${HeaderStyle.flower_active}` : ''}`}
        src={'/images/SVG/FLEUR_W.svg'} 
        alt="white flower logo" 
        height={300} 
        width={300} 
        onClickContainer={() => {
            setNavMobileActive(!navMobileActive)
        }}/>
        <NavigationDesktop/>
        <NavigationMobile navMobileActive={navMobileActive} />

    </div>
)
};