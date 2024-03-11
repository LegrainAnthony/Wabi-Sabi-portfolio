import { FontStyle } from "@/styles";
import { UiComponentProps } from "@/types/UiComponentsProps";

export const TitleContainer: React.FC<UiComponentProps> = ({ children, className = '' }) => {
  return <div className={`${className} ${FontStyle.blunext}`}>{children}</div>;
};
