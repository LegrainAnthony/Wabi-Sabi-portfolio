interface NavigationMobileProps {
    navMobileActive: boolean
}

import { CustomImage } from "@/components/UI";
import { FontStyle, NavigationMobileStyle } from "@/styles"

export const NavigationMobile: React.FC<NavigationMobileProps> = ({navMobileActive}) => {
    return (
        <div className={`${NavigationMobileStyle.container} ${FontStyle.jap} ${navMobileActive ? `${NavigationMobileStyle.container_active}` : ''}`} >
               <div className={`${NavigationMobileStyle.text_container}`}>
                <p className={`${NavigationMobileStyle.test}`}>HOME</p>
                <p className={`${NavigationMobileStyle.test}`}>WORKS</p>
                <p className={`${NavigationMobileStyle.test}`}>ABOUT ME</p>
                <p className={`${NavigationMobileStyle.test}`}>CONTACT</p>
                <div className={`${NavigationMobileStyle.medias__container}`} >
                    <CustomImage classNameContainer={`${NavigationMobileStyle.media}`} src='images/SVG/INSTA.svg' />
                    <CustomImage src='images/SVG/TWITTER.svg' />
                </div>
               </div>
        </div>
    )
};