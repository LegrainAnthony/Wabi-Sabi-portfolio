import { CustomButtonStyle } from '@/styles';
import { CustomButtonProps } from '@/types'
export const Button: React.FC<CustomButtonProps> =  ({className, buttonText}) => {

    return (
        <div className={`${CustomButtonStyle.button__border} ${className}`}>
            <p className={`${CustomButtonStyle.button__text}`}>{buttonText}</p>
        </div>
    )
}