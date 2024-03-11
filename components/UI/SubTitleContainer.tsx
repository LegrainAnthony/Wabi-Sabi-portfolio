import { FontStyle } from "@/styles";
import { UiComponentProps } from "@/types";

export const SubTitleContainer: React.FC<UiComponentProps> = ({ children, className = '' }) => {
  return <div className={`${className} ${FontStyle.manthone_sb}`}>{children}</div>;
};
