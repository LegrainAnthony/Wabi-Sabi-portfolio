import { FontStyle, HomeStyle } from "@/styles";
import { UiComponentProps } from "@/types";

export const SubTitleContainer: React.FC<UiComponentProps> = ({ children, className = '' }) => {
  return <div className={`${className} ${FontStyle.manthone_sb} ${HomeStyle.subtitle__container}`}>{children}</div>;
};
