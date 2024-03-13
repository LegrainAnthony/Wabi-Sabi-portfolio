import { AboutStyle } from "@/styles";
import { HomeComponentProps, deviceProperties } from "@/types";
import { useMatchMedia } from "@/hooks";
import { calculTopPosition } from '@/helpers';
import { CustomImage, TitleContainer, PinkJapContainer, ComponentsHomeContainer } from "@/components/UI";
import { Button } from "../UI/Button";

export const AboutComponent: React.FC<HomeComponentProps> = ({ position }) => {
  const deviceSizes: deviceProperties[] = 
  [   
    {name: 'mobile-sm', current_device : useMatchMedia('(max-width: 460px)'), position: 50},
    {name: 'mobile', current_device : useMatchMedia('(max-width: 768px)'), position: 55},
  ];

    return (
      <ComponentsHomeContainer position={calculTopPosition(position, deviceSizes)} className={`${AboutStyle.container}`}>
        <CustomImage classNameContainer={`${AboutStyle.image__container}`} alt={'profile picture'} src={`/images/JPEG/profile_pic.jpg`} />
          <TitleContainer>
            <h1 className={`${AboutStyle.title}`}>About me</h1>
          </TitleContainer>
          <PinkJapContainer className={`${AboutStyle.sub_pres__container}`}>
            <p>Qui suis-je ?,</p>
            <p>Quelles sont mes passions ?</p>
          </PinkJapContainer>
          <Button className={AboutStyle.button} buttonText="EN SAVOIR PLUS"/>
      </ComponentsHomeContainer>
  );
};
