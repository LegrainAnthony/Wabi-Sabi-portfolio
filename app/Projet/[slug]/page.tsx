"use client"
import { CustomImage, PageContainer, SubTitleContainer, TitleContainer } from "@/components/UI";
import { ProjetPageStyle } from "@/styles";
import { ProjetsData } from "@/datas";
import { useEffect, useState } from "react";
import Error from "next/error";
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

    if (!projetData) {
        return <Error statusCode={404} />;
    }
    
    return (
        <PageContainer>
            <div className={`${ProjetPageStyle.bannier__container}`}>
                <CustomImage src={projetData.cover.url} alt={projetData.cover.alt} classNameContainer={ProjetPageStyle.image__container} width={800} height={800}/>
                <div className={`${ProjetPageStyle.presentation__container}`}>
                    <TitleContainer>
                        <p>{projetData.name}</p>
                    </TitleContainer>
                    <SubTitleContainer>
                        <p>{projetData.subtitle}</p>
                    </SubTitleContainer>
                </div>
            </div>
            <p>07/04/2023</p>
            <div>
                {projetData.description.map((string, index) =>  <p key={index}>{string}</p>)}
            </div>
            <div className={`${ProjetPageStyle.projet__slides__container}`} >
                {projetData.slides.map((slide, index) => {
                    if(slide.type === "image") {
                        return <CustomImage classNameContainer={ProjetPageStyle.slide__image__container} key={index} src={slide.url} alt={slide.alt} width={800} height={800}/>
                    }
                    if(slide.type === "video") {
                        return  <div key={index} className={ProjetPageStyle.slide__image__container}>
                        <video className={ProjetPageStyle.slide__image__container} controls >
                            <source src={slide.url} type="video/mp4"/>
                        </video>
                      </div>
                    }
                })}
            </div>
        </PageContainer>
    )  
};

export default ProjetPage