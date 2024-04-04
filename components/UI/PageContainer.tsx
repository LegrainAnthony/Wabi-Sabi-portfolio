import { GlobalStyle, HeaderStyle } from "@/styles";
import { Header } from "../Header/Header";
import { Children } from "react";
interface PageContainerProps {
    children: React.ReactNode
}

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
    return (
        <div className={`${GlobalStyle.page__container}`}>


        <div
        className={`${GlobalStyle.background} ${GlobalStyle.scrollable}` }
        >
        <img
          src="/images/SVG/FOND.svg"
          className={`${GlobalStyle.background__image} ${GlobalStyle.scrollable__image}` }
        />
        </div>
        <Header className={`${GlobalStyle.scrollable__image} ${HeaderStyle.no_stiky}`} white={true} />
        {children}
        </div>
    )
};