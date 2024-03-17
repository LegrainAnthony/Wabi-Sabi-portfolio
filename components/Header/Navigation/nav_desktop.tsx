interface NavigationDesktopProps {

}

import { CustomImage } from "@/components/UI";
import { Colors, FontStyle, NavigationDesktopStyle } from "@/styles"

export const NavigationDesktop: React.FC<NavigationDesktopProps> = () => {
    return (
       <div className={`${NavigationDesktopStyle.container}`}>
        <div className={`${NavigationDesktopStyle.medias__container}`} >
            <CustomImage classNameContainer={`${NavigationDesktopStyle.media}`} src='images/SVG/INSTA_P.svg' />
            <CustomImage src='images/SVG/TWITTER_P.svg' />
        </div>
        <div className={`${NavigationDesktopStyle.contact__container} ${FontStyle.jap} ${Colors.purple}`} >
            <p className={`${NavigationDesktopStyle.contact}`} >Contact</p>
        </div>
        <CustomImage 
            src={'images/SVG/LOGO_ROTATE.svg'} 
            alt="Header logo" 
        />
       </div>
    )
};