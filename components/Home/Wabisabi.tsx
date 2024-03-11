import { WabisabiStyle } from "../../styles/index";
import { WabisabiComponentProps } from "@/types";
import { CustomImage, TitleContainer, SubTitleContainer, PinkJapContainer } from "@/components/UI";

export const WabisabiComponent: React.FC<WabisabiComponentProps> = ({ position }) => {
    return (
    <div className={`${WabisabiStyle.container}`} style={{ top: `${position}vh`}} >
      <TitleContainer>
        <h1 className={`${WabisabiStyle.wabisabi_title}`}>Wabi-Sabi</h1>
      </TitleContainer>
        <SubTitleContainer className={`${WabisabiStyle.studio__container}`}>
          <p className={`${WabisabiStyle.studio}`}>STUDIO</p>
          <CustomImage classNameContainer={`${WabisabiStyle.studio__flower__container}`}  src='images/SVG/FLEUR.svg' alt="Fleur"/>
        </SubTitleContainer>
      <div className="truc rouge"></div>
      <PinkJapContainer className={`${WabisabiStyle.sub_pres__container}`}>
        <p>Design graphique</p>
        <p>& multimédia</p>
      </PinkJapContainer>
    </div>
  );
};
