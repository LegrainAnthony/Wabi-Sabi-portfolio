import { Colors, FontStyle, QuestionStyle } from "../../styles/index";
import { HomeComponentProps } from "@/types";
import { CustomImage, TitleContainer, SubTitleContainer, PinkJapContainer, ComponentsHomeContainer } from "@/components/UI";

export const QuestionComponent: React.FC<HomeComponentProps> = ({ position }) => {
    return (
      <ComponentsHomeContainer position={position} className={`${QuestionStyle.container}`}>
          <TitleContainer>
            <h1 className={`${QuestionStyle.title}`}>Une question ?</h1>
          </TitleContainer>
            <SubTitleContainer className={`${QuestionStyle.subtitle__container}`}>
              <p className={`${QuestionStyle.subtitle}`}>Je me ferais un plaisir</p>
              <p className={`${QuestionStyle.subtitle}`}>d’y repondre !</p>
            </SubTitleContainer>
          <PinkJapContainer className={`${QuestionStyle.sub_pres__container}`}>
            <p>Je suis disponible par appel pour discuter</p>
            <p>de ton projet,tes envies...</p>
            <p>À bientôt !</p>
          </PinkJapContainer>
          <div className={`${FontStyle.jap} ${Colors.purple} ${QuestionStyle.contact__container}`}>
            <a className={`${Colors.purple}`} href="tel:0634167243">06.34.16.72.43</a>
            <a className={`${Colors.purple}`} href="mailto:beauchamplea27@gmail.com">beauchamplea27@gmail.com</a>
          </div>

      </ComponentsHomeContainer>
  );
};
