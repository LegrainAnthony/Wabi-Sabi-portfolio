import { GlobalStyle, FontStyle } from "@/styles";
import { HomeContainerComponents } from "@/types";
import { useMatchMedia } from '@/hooks'

export const ComponentsHomeContainer: React.FC<HomeContainerComponents> = ({ children, className = '', position }) => {
  return <div className={`${className} ${GlobalStyle.components__container}`} style={{top : `${position}vh`}}>{children}</div>;
};
