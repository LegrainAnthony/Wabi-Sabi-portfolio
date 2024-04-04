import React from 'react';
import { UniversStyle } from "../../styles/index";
import { HomeComponentProps, deviceProperties } from "@/types";
import { useMatchMedia } from "@/hooks";
import { calculTopPosition } from '@/helpers';
import { ComponentsHomeContainer, TitleContainer, SubTitleContainer, PinkJapContainer } from "@/components/UI";
import { Button } from "../UI/Button";
import Link from 'next/link';

export const UniversComponent: React.FC<HomeComponentProps> = ({ position }) => {
  const deviceSizes: deviceProperties[] = 
      [   
        {name: 'mobile-sm', current_device : useMatchMedia('(max-width: 460px)'), position: 40},
        {name: 'mobile', current_device : useMatchMedia('(max-width: 768px)'), position: 40},
        {name: 'tablet', current_device : useMatchMedia('(max-width: 1024px)'), position: 40},
        {name: 'tablet', current_device : useMatchMedia('(max-width: 1280px)'), position: 27},
      ];

    return (
      <ComponentsHomeContainer position={calculTopPosition(position, deviceSizes)} className={`${UniversStyle.container}`}>
        <div className={UniversStyle.video__container}>
          <video className={UniversStyle.video} controls autoPlay muted loop>
              <source src="videos/SHOWREEL.mp4" type="video/mp4"/>
          </video>
        </div>

          <TitleContainer className={`${UniversStyle.title__container}`}>
            <h1 className={`${UniversStyle.title}`}>Mon univers</h1>
          </TitleContainer>
            <SubTitleContainer className={`${UniversStyle.graphique__container}`}>
              <p className={`${UniversStyle.graphique}`}>GRAPHIQUE</p>
            </SubTitleContainer>
          <PinkJapContainer className={`${UniversStyle.sub_pres__container}`}>
            <p>Motions design,</p>
            <p>illustration,identité</p>
            <p>visuelle ...</p>
          </PinkJapContainer>
          <Link href={'/my-univers'} >
          <Button className={UniversStyle.button} buttonText="DECOUVRIR"/>
          </Link>
      </ComponentsHomeContainer>
  );
};
