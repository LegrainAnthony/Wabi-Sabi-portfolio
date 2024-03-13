export interface CustomImageProps {
    classNameContainer?: string;
    classNameImage? : string;
    width? : number;
    height? : number;
    alt? : string;
    src? : string;
    onClickContainer?: () => void;
    onClickImage?: () => void;
}