import { FontStyle, HeaderStyle } from "@/styles";
import Image from "next/image";

interface HeaderProps {

};

export const Header : React.FC<HeaderProps> = () => {

return (
    <div className={`${HeaderStyle.container} `}>
       <p className={`${HeaderStyle.name} ${FontStyle.jap}`}>
       Léa beauchamp
        </p>
        <div className={HeaderStyle.flower__container} >
            <Image className={HeaderStyle.flower} src={'images/SVG/FLEUR_W.svg'} alt="white flower logo" height={300} width={300} />
        </div>
    </div>
)
};