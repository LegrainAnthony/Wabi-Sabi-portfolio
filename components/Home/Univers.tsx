import { UniversStyle } from "../../styles/index";
import { HomeComponentProps } from "@/types";
import { CustomImage, TitleContainer, SubTitleContainer, PinkJapContainer, ComponentsHomeContainer } from "@/components/UI";
import { Button } from "../UI/Button";

export const UniversComponent: React.FC<HomeComponentProps> = ({ position }) => {
    return (
      <ComponentsHomeContainer position={position + 10} className={`${UniversStyle.container}`}>
        <div className={UniversStyle.video__container}>
          <video className={UniversStyle.video} controls autoPlay muted loop>
              <source src="videos/SHOWREEL.mp4" type="video/mp4"/>
          </video>
        </div>

          <TitleContainer className={`${UniversStyle.title__container}`}>
            <h1 className={`${UniversStyle.title}`}>Mon univers</h1>
          </TitleContainer>
            <SubTitleContainer className={`${UniversStyle.graphique__container}`}>
              <p className={`${UniversStyle.graphique}`}>GRAPHIQUE</p>
            </SubTitleContainer>
          <PinkJapContainer className={`${UniversStyle.sub_pres__container}`}>
            <p>Motions design,</p>
            <p>illustration,identité</p>
            <p>visuelle ...</p>
          </PinkJapContainer>
          <Button className={UniversStyle.button} buttonText="DECOUVRIR"/>
      </ComponentsHomeContainer>
  );
};
