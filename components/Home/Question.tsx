import { Colors, FontStyle, QuestionStyle } from "@/styles";
import { HomeComponentProps, deviceProperties } from "@/types";
import { useMatchMedia } from "@/hooks";
import { calculTopPosition } from '@/helpers';
import { CustomImage, TitleContainer, SubTitleContainer, PinkJapContainer, ComponentsHomeContainer } from "@/components/UI";
import Link from "next/link";
import { Button } from "@/components/UI/Button";

export const QuestionComponent: React.FC<HomeComponentProps> = ({ position }) => {
  const deviceSizes: deviceProperties[] = 
  [   
    {name: 'mobile-sm', current_device : useMatchMedia('(max-width: 360px)'), position: 15},
    {name: 'mobile-sm', current_device : useMatchMedia('(max-width: 460px)'), position: 25},
    {name: 'tablet', current_device : useMatchMedia('(max-width: 1024px)'), position: 15},
    {name: 'tablet', current_device : useMatchMedia('(max-width: 1280px)'), position: 25},
  ];

    return (
      <ComponentsHomeContainer position={calculTopPosition(position, deviceSizes)}>
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
            <Link href={'/pdf/tarifs.pdf'} rel="noopener noreferrer" target="_blank" style={{textDecoration: "none"}}>
              <Button className={`${QuestionStyle.button} ${FontStyle.jap}`} buttonText="Voir mes Tarifs" onClick={() => {console.log('test');
            }}/>
            </Link>

          </PinkJapContainer>
          <div className={`${QuestionStyle.contact__medias__container}`} >
            <div className={`${FontStyle.jap} ${Colors.purple} ${QuestionStyle.contact__container}`}>
              <a className={`${Colors.purple}`} href="tel:0634167243">06.34.16.72.43</a>
              <a className={`${Colors.purple}`} href="mailto:beauchamplea27@gmail.com">beauchamplea27@gmail.com</a>
            </div>
            <div className={`${QuestionStyle.medias}`} >
            <Link href={'https://twitter.com/Avalorrs'} rel="noopener noreferrer" target="_blank">
              <CustomImage classNameContainer={`${QuestionStyle.media}`} src='/images/SVG/TWITTER_P.svg' />
            </Link>
            <Link href={'https://www.instagram.com/leart0_0/'} rel="noopener noreferrer" target="_blank">
              <CustomImage classNameContainer={`${QuestionStyle.media}`} src='/images/SVG/INSTA_P.svg' />
            </Link>
            </div>
          </div>
      </ComponentsHomeContainer>
  );
};
