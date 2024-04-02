import { useState } from "react"
import { CustomImage } from "../UI"
import Image from "next/image";
interface GifComponentProps {
    classNameContainer: string,
    classNameImage: string, 
    preview_src: string,
    gif_src: string,
    alt: string
}
export const GifComponent: React.FC<GifComponentProps> = ({classNameContainer, classNameImage, preview_src, gif_src,  alt, }) => {

    const [isHover, setIsHover] = useState(false)

    const handleMouseHover = () => {
        setIsHover(!isHover)
    }

    return (
        <div onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover} className={classNameContainer} >
            <Image style={{width: '100%', height: '100%'}} className={classNameImage} src={!isHover ? preview_src : gif_src} alt={alt} width={300} height={300}/>
        </div>
    )
}