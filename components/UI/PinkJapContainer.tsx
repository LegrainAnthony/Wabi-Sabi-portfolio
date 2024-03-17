import { Colors, FontStyle, HomeStyle } from "@/styles";
import { UiComponentProps } from "@/types/UiComponentsProps";

export const PinkJapContainer: React.FC<UiComponentProps> = ({ children, className = '' }) => {
  return <div className={`${className} ${FontStyle.jap} ${Colors.pink} ${HomeStyle.pink__container}`}>{children}</div>;
};
