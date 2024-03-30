'use client'
import { CustomImage, PageContainer, SubTitleContainer, TitleContainer } from "@/components/UI";
import { FontStyle, MyUniversStyle } from "@/styles";
import { IllustrationsDatas } from '@/datas'
import { useEffect, useState } from "react";
type MyUniversProps = {};

const MyUnivers: React.FC<MyUniversProps> = () => {
  const [typeDisplayed, setTypeDisplayed] = useState('all');
  const [illustrations, setIllustrations] = useState(IllustrationsDatas);

  const handleChangeType = (type: string) => {
      setTypeDisplayed(type)
  }

  useEffect(() => {
      if(typeDisplayed !== 'all') {
            let regex = new RegExp(`${typeDisplayed}`)   
            setIllustrations(() => {
                  return IllustrationsDatas.filter((illu, id) => regex.test(illu.type))
            })
            return
      }
      setIllustrations(IllustrationsDatas)
  }, [typeDisplayed])
  
  return (
    <PageContainer>
    <CustomImage  classNameContainer={`${MyUniversStyle.image__container}`}/>
    <div className={`${MyUniversStyle.presentation__container}`}>
       <TitleContainer  className={`${MyUniversStyle.title__Container}`} >
        <p className={`${MyUniversStyle.title}`}>Mon univers</p>
       </TitleContainer>
        <SubTitleContainer className={`${MyUniversStyle.subtitle__container}`} >
        <p className={`${MyUniversStyle.subtitle}`}>Graphique</p>
        </SubTitleContainer>
    </div>
    <div className={`${MyUniversStyle.types__container} ${FontStyle.jap}`} >
          <p className={`${MyUniversStyle.type}`} onClick={() => {handleChangeType('all')}} >ALL</p>
          <p className={`${MyUniversStyle.type}`} onClick={() => {handleChangeType('illu')}} >ILLUSTRATION</p>
          <p className={`${MyUniversStyle.type}`} onClick={() => {handleChangeType('motion')}} >MOTION DESIGN</p>
          <p className={`${MyUniversStyle.type}`} onClick={() => {handleChangeType('visu')}} >IDENTITÉ VISUELLE</p>
    </div>
    <div className={`${MyUniversStyle.projets__container}`}>
      {illustrations.map((illustration, index) => {
            return (
              <CustomImage classNameContainer={`${MyUniversStyle.illustration__container}`} classNameImage={`${MyUniversStyle.illustration}`} src={illustration.image_src} alt={illustration.alt} />
            )
      })}
    </div>
    </PageContainer>
  );
};

export default MyUnivers;
