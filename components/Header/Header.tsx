'use client'
import { FontStyle, HeaderStyle } from "@/styles";
import Image from "next/image";
import { NavigationMobile } from "./Navigation.tsx/nav_mobile";
import { CustomImage } from "../UI";
import { useState } from "react";

interface HeaderProps {
 
};

export const Header : React.FC<HeaderProps> = () => {
    const [navMobileActive, setNavMobileActive] = useState(false);
return (
    <div className={`${HeaderStyle.container} ${navMobileActive ? HeaderStyle.Navigation_mobile_active : navMobileActive} `}>
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
                <NavigationMobile navMobileActive={navMobileActive} />
    </div>
)
};