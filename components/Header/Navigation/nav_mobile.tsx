interface NavigationMobileProps {
    navMobileActive: boolean
}

import { CustomImage } from "@/components/UI";
import { FontStyle, NavigationMobileStyle } from "@/styles"
import Link from "next/link";

export const NavigationMobile: React.FC<NavigationMobileProps> = ({navMobileActive}) => {
    return (
        <div className={`${NavigationMobileStyle.container} ${FontStyle.jap} ${navMobileActive ? `${NavigationMobileStyle.container_active}` : ''}`} >
               <div className={`${NavigationMobileStyle.text_container}`}>
                <Link className={NavigationMobileStyle.link} href={`/`}>
                <p className={`${NavigationMobileStyle.text}`}>HOME</p>
                </Link>
                <Link className={NavigationMobileStyle.link} href={`/my-univers`}>
                <p className={`${NavigationMobileStyle.text}`}>WORKS</p>
                </Link>
                <Link className={NavigationMobileStyle.link} href={`/about`}>
                <p className={`${NavigationMobileStyle.text}`}>ABOUT ME</p>
                </Link>
                <Link className={NavigationMobileStyle.link} href={`/contact`}>
                    <p className={`${NavigationMobileStyle.text}`}>CONTACT</p>
                </Link>
                <Link className={NavigationMobileStyle.link} href={'/pdf/PRESTATION_DE_SERVICE_2024.pdf'} rel="noopener noreferrer" target="_blank">
                <p className={`${NavigationMobileStyle.text}`}>TARIFS</p>
                </Link>
                <div className={`${NavigationMobileStyle.medias__container}`} >
                <Link href={'https://www.instagram.com/leart0_0/'} rel="noopener noreferrer" target="_blank">
                    <CustomImage classNameContainer={`${NavigationMobileStyle.media}`} src='/images/SVG/INSTA.svg' />
                </Link>
                <Link href={'https://twitter.com/Avalorrs'} rel="noopener noreferrer" target="_blank">
                    <CustomImage src='/images/SVG/TWITTER.svg' />
                </Link>
                </div>
               </div>
        </div>
    )
};