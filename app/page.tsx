"use client";

import { useEffect, useState } from "react";
import { GlobalStyle, HomeStyle } from "@/styles"
import { WabisabiComponent} from "@/components/Home/Wabisabi";
import { Header } from "@/components/Header/Header";
import { UniversComponent } from "@/components/Home/Univers";
import { AboutComponent } from "@/components/Home/About";
import { QuestionComponent } from "@/components/Home/Question";
import { PaginationBubble } from "@/components/UI/PaginationBubble";
import { CustomImage } from "@/components/UI";


type HomeProps = {};
type PositionType = number[]

const Home: React.FC<HomeProps> = () => {
  const [index, setIndex] = useState<number>(0);
  const [position, setPosition] = useState<PositionType>([0, 100, 200, 300]);
  const [startY, setStartY] = useState<number>(0);
  const [delayScroll, setDelayScroll] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    if(mounted) {
      const handleWheel = (event: WheelEvent) => {
        if (delayScroll) {
          return;
        }
  
        if (event.deltaY < 0 && index > 0) {
          setIndex((prevIndex) => prevIndex - 1);
          setDelayScroll(true);
        } else if (event.deltaY > 0 && index < position.length - 1) {
          setIndex((prevIndex) => prevIndex + 1);
          setDelayScroll(true);
        }
  
        setTimeout(() => {
          setDelayScroll(false);
        }, 150);
      };
  
      const handleTouchStart = (event: TouchEvent) => {
        const touch = event.touches[0];
        setStartY(touch.clientY);
      };
  
      const handleTouchEnd = (event: TouchEvent) => {
        const touch = event.changedTouches[0];
        const endY = touch.clientY;
        const threshold = 50;
  
        if (startY - endY > threshold && index < position.length - 1) {
          setIndex((prevIndex) => prevIndex + 1);
        } else if (endY - startY > threshold && index > 0) {
          setIndex((prevIndex) => prevIndex - 1);
        }
      };
  
      window.addEventListener("wheel", handleWheel);
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchend", handleTouchEnd);
  
      return () => {
        window.removeEventListener("wheel", handleWheel);
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchend", handleTouchEnd);
      };
    }
    
  }, [index, position.length, startY, delayScroll, mounted]);

  useEffect(() => {
    if(mounted) {
      const newPosition = position.map((_: any, idx: number) => (idx - index) * 100);
      setPosition(newPosition);
    }
  }, [index, mounted]);

  useEffect(() => {
    if (!mounted){
      setMounted(true);
    }

    return () => {
      setMounted(false)
    }
  },[])

  return (
    mounted &&
    <div
    className={GlobalStyle.background}
    >
    <img
      src="/images/SVG/FOND.svg"
      className={GlobalStyle.background__image}
    />
    <Header />
    <div className={HomeStyle.container}>
			<WabisabiComponent position={position[0]} />
			<UniversComponent position={position[1]} />
			<AboutComponent position={position[2]} />
			<QuestionComponent position={position[3]} />
      <div className={HomeStyle.pagination}>
        {position.map((_, idx) => {
          return <PaginationBubble key={idx} active={idx === index} bubbleIndex={idx} setIndex={setIndex}/>
        })}
      </div>
        <CustomImage classNameContainer={`${HomeStyle.down__container} ${index === 3 ? `${HomeStyle.down__active}` : ''}`} src="/images/SVG/DOWN.svg" />
    </div>
      </div>
  );
};

export default Home;
