'use client'
import { PaginationBubbleProps } from "@/types/PaginationBubbleProps";
import { PaginationBubbleStyle } from "@/styles"
export const PaginationBubble: React.FC<PaginationBubbleProps> = ({active, setIndex, bubbleIndex}) => {
    
    const handleClick = () => {
        console.log(bubbleIndex);
        
        setIndex(bubbleIndex)
    };

    return (
        <div onClick={handleClick} className={`${PaginationBubbleStyle.container} ${active ? PaginationBubbleStyle.active : ''}`}>

        </div>
    )
}