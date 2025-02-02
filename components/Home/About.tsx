import { AboutStyle, FontStyle } from "@/styles";
import { HomeComponentProps, deviceProperties } from "@/types";
import { useMatchMedia } from "@/hooks";
import { calculTopPosition } from '@/helpers';
import { CustomImage, TitleContainer, PinkJapContainer, ComponentsHomeContainer } from "@/components/UI";
import { Button } from "../UI/Button";
import Link from "next/link";

export const AboutComponent: React.FC<HomeComponentProps> = ({ position }) => {
  const deviceSizes: deviceProperties[] = 
  [   
    {name: 'mobile-sm', current_device : useMatchMedia('(max-width: 460px)'), position: 55},
    {name: 'mobile', current_device : useMatchMedia('(max-width: 768px)'), position: 55},
    {name: 'tablet', current_device : useMatchMedia('(max-width: 820px)'), position: 55},
    {name: 'tablet', current_device : useMatchMedia('(max-width: 1024px)'), position: 55},
    {name: 'tablet', current_device : useMatchMedia('(max-width: 1280px)'), position: 25},
  ];

    return (
      <ComponentsHomeContainer position={calculTopPosition(position, deviceSizes)} className={`${AboutStyle.container}`}>
        <CustomImage classNameContainer={`${AboutStyle.image__container}`} classNameImage={AboutStyle.img} alt={'profile picture'} src={`/images/JPG/profile_pic.jpg`} height={800} width={800} />
          <TitleContainer className={`${AboutStyle.title__container}`}>
            <h1 className={`${AboutStyle.title}`}>About me</h1>
          </TitleContainer>
          <PinkJapContainer className={`${AboutStyle.sub_pres__container}`}>
            <p>Qui suis-je ?,</p>
            <p>Quelles sont mes passions ?</p>
          </PinkJapContainer>
          <Link href={'/contact'} style={{textDecoration: "none"}} >
            <Button className={`${AboutStyle.button} ${FontStyle.jap}`} buttonText="EN SAVOIR PLUS"/>
          </Link>
      </ComponentsHomeContainer>
  );
};
