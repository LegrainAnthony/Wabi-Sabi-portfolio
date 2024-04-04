"use client"
import { CustomImage, PageContainer, SubTitleContainer, TitleContainer } from "@/components/UI";
import { FontStyle, ProjetPageStyle } from "@/styles";
import { ProjetsData } from "@/datas";
import { useEffect, useState } from "react";
import Error from "next/error";
import { Button } from "@/components/UI/Button";
interface ProjetPageComponents {
  params: { slug: string };
}

interface projetData {
     slug: string;
     name: string;
     cover: {url: string; alt: string;};
     description: string[];
     subtitle: string;
     slides: { url: string; alt: string; type: string}[]
}


const ProjetPage: React.FC<ProjetPageComponents> = ({ params }) => {

    const [projetData, setProjetData] = useState<projetData | undefined>(ProjetsData.find((projet) => projet.slug === params.slug ) || undefined);
    
    const scrollToTop = () => {
        window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
    }

    if (!projetData) {
        return <Error statusCode={404} />;
    }
    
    return (
        <PageContainer>
            <div className={`${ProjetPageStyle.bannier__container}`}>
                <CustomImage src={projetData.cover.url} alt={projetData.cover.alt} classNameContainer={ProjetPageStyle.image__container} width={1600} height={1600}/>
                <div className={`${ProjetPageStyle.presentation__container}`}>
                    <TitleContainer >
                        <p className={`${ProjetPageStyle.title}`} >{projetData.name}</p>
                    </TitleContainer>
                    <SubTitleContainer>
                        <p className={`${ProjetPageStyle.subtitle}`}>{projetData.subtitle}</p>
                    </SubTitleContainer>
                </div>
            </div>
            <p className={`${ProjetPageStyle.date} ${FontStyle.jap}`}>{projetData.date}</p>
            <div className={`${ProjetPageStyle.description} ${FontStyle.jap}`}>
                {projetData.description.map((string, index) =>  <p key={index}>{string}</p>)}
            </div>
            <div className={`${ProjetPageStyle.projet__slides__container}`} >
                {projetData.slides.map((slide, index) => {
                    if(slide.type === "image") {
                        return <CustomImage classNameContainer={ProjetPageStyle.slide__image__container} key={index} src={slide.url} alt={slide.alt} width={1600} height={1600}/>
                    }
                    if(slide.type === "video") {
                        return  (
                        <div key={index} className={ProjetPageStyle.slide__image__container}>
                            <video className={ProjetPageStyle.slide} controls >
                                <source src={slide.url} type="video/mp4"/>
                            </video>
                        </div>)
                    }
                })}
            </div>

            <Button buttonText="Remonter la page" className={`${ProjetPageStyle.button}`} onClick={scrollToTop}/>
        </PageContainer>
    )  
};

export default ProjetPage