// Importez les styles comme avant
import { GlobalStyle, WabisabiStyle } from "../../styles/index";

// Étape 1: Définir une interface pour les props
interface WabisabiComponentProps {
  position: number; // Typage de 'position' en tant que nombre
}

// Étape 2: Appliquer cette interface au composant
export const WabisabiComponent: React.FC<WabisabiComponentProps> = ({ position }) => {
  console.log(position);
  
    return (
    <div className={`${WabisabiStyle.wabisabi__container} ${GlobalStyle.db4}`} style={{ top: `${position}vh`}} >
      <div className={WabisabiStyle.wabisabi__title__container}>
        <h1 className={WabisabiStyle.wabisabi_title}>Wabi-Sabi</h1>
        <div className={WabisabiStyle.wabisabi__subtitle__container}>
          <p className={WabisabiStyle.wabisabi__subtitle}>STUDIO</p>
          <div className={WabisabiStyle.wabisabi__subtitle__flower__container}>
            {/* Assurez-vous que le src de l'image est correctement géré si nécessaire */}
            <img className={WabisabiStyle.wabisabi__subtitle__flower} alt="Fleur" />
          </div>
        </div>
      </div>
      <div className="truc rouge"></div>
      <div className="description__title">
        <p>Design graphique</p>
        <p>& multimédia</p>
      </div>
    </div>
  );
};
