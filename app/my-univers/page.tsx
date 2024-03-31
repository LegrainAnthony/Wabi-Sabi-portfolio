'use client'
import { CustomImage, PageContainer, SubTitleContainer, TitleContainer } from "@/components/UI";
import { FontStyle, MyUniversStyle } from "@/styles";
import { IllustrationsDatas } from '@/datas'
import { useEffect, useState } from "react";
type MyUniversProps = {};

const MyUnivers: React.FC<MyUniversProps> = () => {
  const [typeDisplayed, setTypeDisplayed] = useState('ALL');
  const [illustrations, setIllustrations] = useState(IllustrationsDatas);

  const handleChangeType = (type: string) => {
      setTypeDisplayed(type)
  }

  useEffect(() => {
      if(typeDisplayed !== 'ALL') {
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
          <p className={`${MyUniversStyle.type}`} onClick={() => {handleChangeType('ALL')}} >ALL</p>
          <p className={`${MyUniversStyle.type}`} onClick={() => {handleChangeType('ILLUSTRATION')}} >ILLUSTRATION</p>
          <p className={`${MyUniversStyle.type}`} onClick={() => {handleChangeType('MOTION')}} >MOTION DESIGN</p>
          <p className={`${MyUniversStyle.type}`} onClick={() => {handleChangeType('IDENTITE_VISUELLE')}} >IDENTITÉ VISUELLE</p>
    </div>
    <div className={`${MyUniversStyle.projets__container}`}>
      {illustrations.map((illustration, index) => {
            return (
              <CustomImage classNameContainer={`${MyUniversStyle.illustration__container}`} classNameImage={`${MyUniversStyle.illustration}`} src={illustration.preview_url} alt={illustration.alt} />
            )
      })}
    </div>
    </PageContainer>
  );
};

export default MyUnivers;
