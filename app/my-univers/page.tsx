'use client'
import { CustomImage, PageContainer, SubTitleContainer, TitleContainer } from "@/components/UI";
import { FontStyle, MyUniversStyle } from "@/styles";
import { IllustrationsDatas } from '@/datas'
import { useEffect, useState } from "react";
type MyUniversProps = {};

const MyUnivers: React.FC<MyUniversProps> = () => {
  console.log(IllustrationsDatas);
  const [typeDisplayed, setTypeDisplayed] = useState('all');
  const [illustrations, setIllustrations] = useState(IllustrationsDatas);

  useEffect(() => {
      if(typeDisplayed !== 'all') {
            setIllustrations(() => {
                  return IllustrationsDatas.filter((illu, id) => illu.type === typeDisplayed)
            })
            return
      }
      setIllustrations(IllustrationsDatas)
  }, [])
  
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
          <p className={`${MyUniversStyle.type}`} >ALL</p>
          <p className={`${MyUniversStyle.type}`} >ILLUSTRATION</p>
          <p className={`${MyUniversStyle.type}`} >MOTION DESIGN</p>
          <p className={`${MyUniversStyle.type}`} >IDENTITÉ VISUELLE</p>
    </div>
    <div className={`${MyUniversStyle.projets__container}`}>
      {illustrations.map((_, index) => {
            return (
                <CustomImage>
                  
                </CustomImage>
            )
      })}
    </div>
    </PageContainer>
  );
};

export default MyUnivers;
