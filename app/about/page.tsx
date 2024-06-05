import { PageContainer, TitleContainer, SubTitleContainer, PinkJapContainer, CustomImage} from "@/components/UI";
import { ContactPageStyle, FontStyle } from "@/styles";
import Link from "next/link";

interface AboutPageProps {};

const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <PageContainer>
      <TitleContainer>
            <h1 className={`${ContactPageStyle.question}`}>Une question ?</h1>
          </TitleContainer>
            <SubTitleContainer className={`${ContactPageStyle.subtitle}`}>
              <p className={``}>Je me ferais un plaisir</p>
              <p className={``}>d’y repondre !</p>
            </SubTitleContainer>
          <PinkJapContainer className={`${ContactPageStyle.pink_text}`}>
            <p>Je suis disponible par appel pour discuter</p>
            <p>de ton projet,tes envies...</p>
            <p>À bientôt !</p>
          </PinkJapContainer>
          <div className={`${ContactPageStyle.media__container} ${FontStyle.jap}`}>
            <Link href={"https://www.instagram.com/leart0_0/"} rel="noopener noreferrer" target="_blank" className={`${ContactPageStyle.media_link}`}>
              <CustomImage src="/images/SVG/INSTA.svg" classNameContainer={`${ContactPageStyle.image_link_container}`} />
              <p className={`${ContactPageStyle.media_text}`} >leart0_0</p>
            </Link>
            <Link href={"https://x.com/Avalorrs"} rel="noopener noreferrer" target="_blank" className={`${ContactPageStyle.media_link}`}>
              <CustomImage src="/images/SVG/TWITTER.svg" classNameContainer={`${ContactPageStyle.image_link_container}`} />
              <p className={`${ContactPageStyle.media_text}`} >Avalorrs</p>
            </Link>
            <Link href={"tel:0634167243"} className={`${ContactPageStyle.media_link}`}>
              <CustomImage src="/images/SVG/INSTA.svg" classNameContainer={`${ContactPageStyle.image_link_container}`} />
              <p className={`${ContactPageStyle.media_text}`} >06.34.16.72.43</p>
            </Link>
            <Link href={"mailto:beauchamplea27@gmail.com"} className={`${ContactPageStyle.media_link}`}>
              <CustomImage src="/images/SVG/TWITTER.svg" classNameContainer={`${ContactPageStyle.image_link_container}`} />
              <p className={`${ContactPageStyle.media_text}`} >beauchamplea27@gmail.com</p>
            </Link>

          </div>
    </PageContainer>
  );
};

export default AboutPage;
