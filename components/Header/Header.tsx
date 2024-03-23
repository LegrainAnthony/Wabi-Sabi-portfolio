'use client'
import { FontStyle, HeaderStyle } from "@/styles";
import Image from "next/image";
import { NavigationMobile } from "./Navigation/nav_mobile";
import { CustomImage } from "../UI";
import { useEffect, useState } from "react";
import { useMatchMedia } from "@/hooks";
import { NavigationDesktop } from "./Navigation/nav_desktop";

interface HeaderProps {
 className?: string
};




export const Header : React.FC<HeaderProps> = ({className}) => {
    const [navMobileActive, setNavMobileActive] = useState(false);
    const [displayMobileHeader, setDisplayMobileHeader] = useState(false)
    // console.log(useMatchMedia('(min-width: 1280px)'));

return (
    <div className={`${HeaderStyle.container} ${className}`}>
       <p className={`${HeaderStyle.name} ${FontStyle.jap}`}>
       Léa beauchamp
        </p>
        <CustomImage 
        classNameContainer={`${HeaderStyle.flower__container} ${navMobileActive ? `${HeaderStyle.flower_active}` : ''}`}
        src={'images/SVG/FLEUR_W.svg'} 
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