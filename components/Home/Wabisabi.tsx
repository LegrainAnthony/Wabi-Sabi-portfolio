import { WabisabiStyle } from "../../styles/index";
import { HomeComponentProps } from "@/types";
import { CustomImage, TitleContainer, SubTitleContainer, PinkJapContainer, ComponentsHomeContainer } from "@/components/UI";

export const WabisabiComponent: React.FC<HomeComponentProps> = ({ position }) => {
    return (
      <ComponentsHomeContainer position={position}>
      <TitleContainer>
        <h1 className={`${WabisabiStyle.wabisabi_title}`}>Wabi-Sabi</h1>
      </TitleContainer>
        <SubTitleContainer className={`${WabisabiStyle.studio__container}`}>
          <p className={`${WabisabiStyle.studio}`}>STUDIO</p>
          <CustomImage classNameContainer={`${WabisabiStyle.studio__flower__container}`}  src='images/SVG/FLEUR.svg' alt="Fleur"/>
        </SubTitleContainer>
        <div className={`${WabisabiStyle.red__baton__container}`}>
        <CustomImage classNameContainer={`${WabisabiStyle.red__baton} ${WabisabiStyle.red__baton_first}`} src="images/SVG/RED__BATON.svg" alt="baton rouge"/>
        <CustomImage classNameContainer={`${WabisabiStyle.red__baton} ${WabisabiStyle.red__baton_second}`} src="images/SVG/RED__BATON.svg" alt="baton rouge"/>
        </div>
      <PinkJapContainer className={`${WabisabiStyle.sub_pres__container}`}>
        <p>Design graphique</p>
        <p>& multimédia</p>
      </PinkJapContainer>
      </ComponentsHomeContainer>
  );
};
