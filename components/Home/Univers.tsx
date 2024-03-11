import { UniversStyle } from "../../styles/index";
import { HomeComponentProps } from "@/types";
import { CustomImage, TitleContainer, SubTitleContainer, PinkJapContainer, ComponentsHomeContainer } from "@/components/UI";
import { Button } from "../UI/Button";

export const UniversComponent: React.FC<HomeComponentProps> = ({ position }) => {
    return (
      <ComponentsHomeContainer position={position} className={`${UniversStyle.container}`}>
          <TitleContainer>
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
