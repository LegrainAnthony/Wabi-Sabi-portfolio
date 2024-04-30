interface NavigationDesktopProps {
    white?: boolean
}

import { CustomImage } from "@/components/UI";
import { Colors, FontStyle, NavigationDesktopStyle } from "@/styles"

export const NavigationDesktop: React.FC<NavigationDesktopProps> = ({ white }) => {
    return (
       <div className={`${NavigationDesktopStyle.container}`}>
        <div className={`${NavigationDesktopStyle.medias__container}`} >
            <CustomImage classNameContainer={`${NavigationDesktopStyle.media}`} src={ white ? '/images/SVG/INSTA.svg' : '/images/SVG/INSTA_P.svg'} />
            <CustomImage src={ white ? '/images/SVG/TWITTER.svg' : '/images/SVG/TWITTER_P.svg' } />
        </div>
        <div className={`${NavigationDesktopStyle.contact__container} ${FontStyle.jap} ${Colors.purple}`} >
            <p className={`${NavigationDesktopStyle.contact} ${white ? `${NavigationDesktopStyle.white}` : null }`}>Contact</p>
        </div>
        <CustomImage 
            src={'/images/SVG/LOGO_ROTATE.svg'} 
            alt="Header logo"
            classNameContainer={`${NavigationDesktopStyle.image__container}`}
        />
       </div>
    )
};