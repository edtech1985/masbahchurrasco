import { CardapioContainer, CardapioImage } from "./Cardapio";
import CardapioFrenteImageSrc from "../../assets/cardapio2022-1.png";
import CardapioVersoImageSrc from "../../assets/cardapio2022-2.png";

export function CardapioFrente() {
  return (
    <CardapioContainer>
      <CardapioImage src={CardapioFrenteImageSrc} />
    </CardapioContainer>
  );
}

export function CardapioVerso() {
  return (
    <CardapioContainer>
      <CardapioImage src={CardapioVersoImageSrc} />
    </CardapioContainer>
  );
}