import { Colors, FontStyle, FooterStyle } from "@/styles";
import { CustomImage } from "../UI";
import Link from "next/link";


interface FooterProps {
 className?: string
 white?: boolean 
};

export const Footer : React.FC<FooterProps> = () => {
    
    return (
        <div className={`${FooterStyle.container}`} >
            <CustomImage classNameContainer={`${FooterStyle.logo__container}`} src="/images/SVG/LOGO.svg" />
            <div className={`${FooterStyle.contact__container} ${FontStyle.jap} `} >
                <Link className={`${FooterStyle.contact}`} href={`mailto:beauchamplea27@gmail.com`}><p className={` ${Colors.purple}`} >beauchamplea27@gmail.com</p></Link>
                <Link className={`${FooterStyle.contact}`} href={`tel:0634167243`}><p className={`${FooterStyle.contact} ${Colors.purple}`} >06.34.16.72.43</p></Link>
            </div>
            <div className={`${FooterStyle.medias__container}`}>
                <Link href={'https://www.instagram.com/leart0_0/'} rel="noopener noreferrer" target="_blank">
                <CustomImage src="/images/SVG/INSTA_P.svg" classNameContainer={FooterStyle.media} />
                </Link>
                <Link href={'https://twitter.com/Avalorrs'} rel="noopener noreferrer" target="_blank">
                <CustomImage src="/images/SVG/TWITTER_P.svg" classNameContainer={FooterStyle.media} />
                </Link>

            </div>
            <CustomImage classNameContainer={`${FooterStyle.arrow__container}`} classNameImage={FooterStyle.arrow} src="/images/SVG/DOWN.svg" />
        </div>
    )
};