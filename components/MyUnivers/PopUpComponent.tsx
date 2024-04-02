'use client'
import { Image } from "antd"

interface PopupComponentProps {
    classNameContainer: string,
    classNameImage: string, 
    preview_src: string,
    image_src: string,
    alt: string
}

export const PopupComponent: React.FC<PopupComponentProps> = ({classNameContainer, classNameImage, preview_src, image_src,  alt, }) => {

    return (
        <div className={classNameContainer} >
            <Image 
            style={{width: '100%', height: '100%'}} 
            className={classNameImage} 
            src={preview_src} 
            preview={{
                src: `${image_src}`,
            }}
            alt={alt} 
            />
        </div>
    )
}