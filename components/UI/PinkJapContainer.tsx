import { Colors, FontStyle } from "@/styles";
import { UiComponentProps } from "@/types/UiComponentsProps";

export const PinkJapContainer: React.FC<UiComponentProps> = ({ children, className = '' }) => {
  return <div className={`${className} ${FontStyle.jap} ${Colors.pink}`}>{children}</div>;
};
