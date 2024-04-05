'use client'
import { CustomImage, PageContainer, SubTitleContainer, TitleContainer } from "@/components/UI";
import { FontStyle, MyUniversStyle } from "@/styles";
import { IllustrationsDatas } from '@/datas'
import { useEffect, useState } from "react";
import { Button } from "@/components/UI/Button";
import { GifComponent } from "@/components/MyUnivers/GifComponent";
import { PopupComponent } from "@/components/MyUnivers/PopUpComponent";
import { useRouter } from "next/navigation";
import Link from "next/link";

type MyUniversProps = {};

const MyUnivers: React.FC<MyUniversProps> = () => {
  const [typeDisplayed, setTypeDisplayed] = useState('ALL');
  const [illustrations, setIllustrations] = useState(IllustrationsDatas);
  const [popupIsMounted, setPopupIsMounted] = useState(false)
  const handleChangeType = (type: string) => {
      setTypeDisplayed(type)
  }

  const router = useRouter();
  

  const scrollToTop = () => {
      window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
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
    <CustomImage  classNameContainer={`${MyUniversStyle.image__container}`} src='/images/JPG/BANNIERE_GALLERIE.png' width={1600} height={1600}/>
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
          <p className={`${MyUniversStyle.type}`} onClick={() => {handleChangeType('STREAM')}} >ASSETS STREAM</p>
    </div>
    <div className={`${MyUniversStyle.projets__container}`}>
      {illustrations.map((illustration, index) => {

            if (illustration.action_click === 'link' && illustration.hover_gif) {
                  return (
                   <Link href={illustration.link} key={index} className={`${MyUniversStyle.illustration__container} ${MyUniversStyle.link__container}`}>
                        <GifComponent key={index}  classNameImage={`${MyUniversStyle.illustration} ${MyUniversStyle.link_image}`}  preview_src={illustration.preview_url} gif_src={illustration.image_src}  alt={illustration.alt} />
                  </Link>
                  )
            }

            if (illustration.action_click === 'popup') {
                  return <PopupComponent key={index}   classNameContainer={`${MyUniversStyle.illustration__container}`} classNameImage={`${MyUniversStyle.illustration}`}  preview_src={illustration.preview_url} image_src={illustration.image_src}  alt={illustration.alt} />
            }

            if (illustration.action_click === 'link') {                  
                  return (
                        <Link rel="noopener noreferrer" target="_blank" href={illustration.link} key={index} className={`${MyUniversStyle.link__container} ${MyUniversStyle.illustration__container}`}>
                              <CustomImage classNameContainer={`${MyUniversStyle.illustration}`} classNameImage={`${MyUniversStyle.illustration} ${MyUniversStyle.link_image}`} src={illustration.preview_url} alt={illustration.alt}/>
                        </Link>
                  )
            }
      })}
    </div>
            <Button className={`${MyUniversStyle.button} ${FontStyle.jap}`} buttonText="REMONTER LA PAGE" onClick={scrollToTop}/>
    </PageContainer>
  );
};

export default MyUnivers;
