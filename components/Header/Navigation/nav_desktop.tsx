interface NavigationDesktopProps {
    white?: boolean
}

import { CustomImage } from "@/components/UI";
import { Colors, FontStyle, NavigationDesktopStyle } from "@/styles"
import Link from "next/link";

export const NavigationDesktop: React.FC<NavigationDesktopProps> = ({ white }) => {
    return (
       <div className={`${NavigationDesktopStyle.container}`}>
        <div className={`${NavigationDesktopStyle.medias__container}`} >
            <Link href={'https://www.instagram.com/leart0_0/'} rel="noopener noreferrer" target="_blank">
            <CustomImage classNameContainer={`${NavigationDesktopStyle.media}`} src={ white ? '/images/SVG/INSTA.svg' : '/images/SVG/INSTA_P.svg'} />
            </Link>
            <Link href={'https://twitter.com/Avalorrs'} rel="noopener noreferrer" target="_blank">
            <CustomImage classNameContainer={`${NavigationDesktopStyle.media}`} src={ white ? '/images/SVG/TWITTER.svg' : '/images/SVG/TWITTER_P.svg' } />
            </Link>
        </div>
            <Link href={'/contact'} className={`${NavigationDesktopStyle.contact__container} ${FontStyle.jap} ${Colors.purple}`}>
            <p className={`${NavigationDesktopStyle.contact} ${white ? `${NavigationDesktopStyle.white}` : null }`}>Contact</p>
            </Link>
        <CustomImage 
            src={'/images/SVG/LOGO_ROTATE.svg'} 
            alt="Header logo"
            classNameContainer={`${NavigationDesktopStyle.image__container}`}
        />
       </div>
    )
};