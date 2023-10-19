import {
  Card,
  CardImage,
  Cards,
  ModalWrapper,
  ModalContent,
  ModalImage,
  ModalClose,
} from "./Cards";
import { useState } from "react";
import TeIlumina from "../../assets/cardapio/te-ilumina.jpg";
import NaoTeMixa from "../../assets/cardapio/nao-te-mixa.jpg";
import Fronteira from "../../assets/cardapio/poderoso.jpg";
import Maragato from "../../assets/cardapio/maragato.jpg";
import Charrua from "../../assets/cardapio/rangos.jpg";
import TriMassa from "../../assets/cardapio/tri-massa.jpg";
import Vegetariano from "../../assets/cardapio/flambado.jpg";
import FraldinhaDefumada from "../../assets/dishes/taboa.jpg";
import Milonga from "../../assets/cardapio/milonga.jpg";
import Taura from "../../assets/cardapio/taura.jpg";
import Indiada from "../../assets/cardapio/indiada.jpg";
import Pampa from "../../assets/cardapio/pampa.jpg";
import TeFresqueia from "../../assets/cardapio/te-fresqueia.jpg";
import Churrasco from "../../assets/dishes/churrasco.jpg";
import PetiscoVazio from "../../assets/dishes/pestisco.jpg";
import BestBurger from "../../assets/dishes/campeche-carvoeira.jpg";

export default function CardsGrid() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("" as any);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen && (
        <ModalWrapper>
          <ModalContent>
            <ModalClose onClick={closeModal}>X</ModalClose>
            <ModalImage src={selectedImage} alt="lanches" />
          </ModalContent>
        </ModalWrapper>
      )}

      <Cards>
        <Card>
          <CardImage src={TeIlumina} onClick={() => openModal(TeIlumina)} />
        </Card>
        <Card>
          <CardImage src={NaoTeMixa} onClick={() => openModal(NaoTeMixa)} />
        </Card>
        <Card>
          <CardImage src={Fronteira} onClick={() => openModal(Fronteira)} />
        </Card>
        <Card>
          <CardImage src={Maragato} onClick={() => openModal(Maragato)} />
        </Card>
        <Card>
          <CardImage src={Charrua} onClick={() => openModal(Charrua)} />
        </Card>
        <Card>
          <CardImage src={TriMassa} onClick={() => openModal(TriMassa)} />
        </Card>
        <Card>
          <CardImage src={Vegetariano} onClick={() => openModal(Vegetariano)} />
        </Card>
        <Card>
          <CardImage
            src={FraldinhaDefumada}
            onClick={() => openModal(FraldinhaDefumada)}
          />
        </Card>
        <Card>
          <CardImage src={Indiada} onClick={() => openModal(Indiada)} />
        </Card>
        <Card>
          <CardImage src={Milonga} onClick={() => openModal(Milonga)} />
        </Card>
        <Card>
          <CardImage src={Taura} onClick={() => openModal(Taura)} />
        </Card>
        <Card>
          <CardImage src={Pampa} onClick={() => openModal(Pampa)} />
        </Card>
        <Card>
          <CardImage src={TeFresqueia} onClick={() => openModal(TeFresqueia)} />
        </Card>
        <Card>
          <CardImage src={Churrasco} onClick={() => openModal(Churrasco)} />
        </Card>
        <Card>
          <CardImage
            src={PetiscoVazio}
            onClick={() => openModal(PetiscoVazio)}
          />
        </Card>
        <Card>
          <CardImage src={BestBurger} onClick={() => openModal(BestBurger)} />
        </Card>
      </Cards>
    </>
  );
}
