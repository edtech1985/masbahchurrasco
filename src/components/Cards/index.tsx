import { Card, CardImage, Cards } from "./Cards";

import Prato1 from '../../assets/cardapio/flambado.jpg'
import Prato2 from '../../assets/cardapio/indiada.jpg'
import Prato3 from '../../assets/cardapio/maragato.jpg';
import Prato4 from '../../assets/cardapio/milonga.jpg';
import Prato5 from '../../assets/cardapio/nao-te-mixa.jpg';
import Prato6 from '../../assets/cardapio/pampa.jpg';
import Prato7 from '../../assets/cardapio/poderoso.jpg';
import Prato8 from '../../assets/cardapio/rangos.jpg';
import Prato9 from '../../assets/cardapio/taura.jpg';
import Prato10 from '../../assets/cardapio/te-fresqueia.jpg';
import Prato11 from '../../assets/cardapio/te-ilumina.jpg';
import Prato12 from '../../assets/cardapio/tri-massa.jpg';
import { useState } from 'react';

export default function CardsGrid() {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('' as any);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setModalOpen(false);
  };

  return (

    <>
    {modalOpen && (
      <div className="modal">
        <img src={selectedImage} alt="" />
        <button onClick={closeModal}>Fechar</button>
      </div>
    )}

    <Cards>
      <Card><CardImage src={Prato1} onClick={() => openModal(Prato1)} /></Card>
      <Card><CardImage src={Prato2} onClick={() => openModal(Prato2)} /></Card>
      <Card><CardImage src={Prato3} onClick={() => openModal(Prato3)} /></Card>
      <Card><CardImage src={Prato4} onClick={() => openModal(Prato4)} /></Card>
      <Card><CardImage src={Prato5} onClick={() => openModal(Prato5)} /></Card>
      <Card><CardImage src={Prato6} onClick={() => openModal(Prato6)} /></Card>
      <Card><CardImage src={Prato7} onClick={() => openModal(Prato7)} /></Card>
      <Card><CardImage src={Prato8} onClick={() => openModal(Prato8)} /></Card>
      <Card><CardImage src={Prato9} onClick={() => openModal(Prato9)} /></Card>
      <Card><CardImage src={Prato10} onClick={() => openModal(Prato10)} /></Card>
      <Card><CardImage src={Prato11} onClick={() => openModal(Prato11)} /></Card>
      <Card><CardImage src={Prato12} onClick={() => openModal(Prato12)} /></Card>
    </Cards>
    </>
  )
}