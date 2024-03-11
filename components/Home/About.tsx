import { AboutStyle } from "@/styles";
import { HomeComponentProps } from "@/types";
import { CustomImage, TitleContainer, PinkJapContainer, ComponentsHomeContainer } from "@/components/UI";
import { Button } from "../UI/Button";

export const AboutComponent: React.FC<HomeComponentProps> = ({ position }) => {
    return (
      <ComponentsHomeContainer position={position} className={`${AboutStyle.container}`}>
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
