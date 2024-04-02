import { WabisabiStyle } from "@/styles";
import { HomeComponentProps, deviceProperties } from "@/types";
import { useMatchMedia } from "@/hooks";
import { calculTopPosition } from '@/helpers';
import { CustomImage, TitleContainer, SubTitleContainer, PinkJapContainer, ComponentsHomeContainer } from "@/components/UI";

export const WabisabiComponent: React.FC<HomeComponentProps> = ({ position }) => {
  const deviceSizes: deviceProperties[] = 
  [   
    {name: 'tablet', current_device : useMatchMedia('(max-width: 1024px)'), position: 30},
  ];


    return (
      <ComponentsHomeContainer position={calculTopPosition(position, deviceSizes)}>
      <TitleContainer className={WabisabiStyle.title__container}>
        <h1 className={`${WabisabiStyle.title}`}>Wabi-Sabi</h1>
      </TitleContainer>
        <SubTitleContainer className={`${WabisabiStyle.studio__container}`}>
          <p className={`${WabisabiStyle.studio}`}>STUDIO</p>
          <CustomImage classNameContainer={`${WabisabiStyle.studio__flower__container}`}  src='/images/SVG/FLEUR.svg' alt="Fleur"/>
        </SubTitleContainer>
        <div className={`${WabisabiStyle.red__baton__container}`}>
        <CustomImage classNameContainer={`${WabisabiStyle.red__baton} ${WabisabiStyle.red__baton_first}`} src="/images/SVG/RED__BATON.svg" alt="baton rouge"/>
        <CustomImage classNameContainer={`${WabisabiStyle.red__baton} ${WabisabiStyle.red__baton_second}`} src="/images/SVG/RED__BATON.svg" alt="baton rouge"/>
        </div>
      <PinkJapContainer className={`${WabisabiStyle.sub_pres__container}`}>
        <p>Design graphique</p>
        <p>& multimédia</p>
      </PinkJapContainer>
      </ComponentsHomeContainer>
  );
};
