import { GlobalStyle } from "@/styles";
import { CustomImageProps } from "@/types";
import Image from "next/image";

export const CustomImage: React.FC<CustomImageProps> = ({classNameContainer = '', classNameImage = '', width = 300, height = 300, alt = 'default alt', src = '', onClickContainer, onClickImage}) => {
  return (
    <div className={`${classNameContainer} ${GlobalStyle.image__container}`} onClick={onClickContainer}>
      <Image className={`${classNameImage} ${GlobalStyle.image}`} alt={alt} src={src} width={width}  height={height} onClick={onClickImage} />
    </div>
  )
};



