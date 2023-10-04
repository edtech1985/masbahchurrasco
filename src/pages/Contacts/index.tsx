import { WhatsAppButtonCampeche, WhatsAppButtonCarvoeira } from "../../components/Buttons/WhatsAppButton";
import { ButtonsDiv, Container, ContentDiv, MapDiv, MapImg, SelectButton, SelectedDiv, StyleLink, Subtitulo, Subtitulo3, Texto, TitleDiv, Titulo, WppDiv } from "./Contacts";

import MapCampeche from '../../assets/img/map-campeche.png'
import { useState } from "react";


export default function Contacts() {

  const [showCampeche, setShowCampeche] = useState(true);
  const [showCarvoeira, setShowCarvoeira] = useState(false);

  return (
    <Container>
      <TitleDiv>
        <Titulo>CONTATO E LOCALIZAÇÃO</Titulo>
        <Subtitulo>Bagual antes de ser Gourmet</Subtitulo>
        <Subtitulo>Os melhores rangos da cidade</Subtitulo>
      </TitleDiv>

      <ButtonsDiv>

        <SelectButton onClick={() => [setShowCampeche(true), setShowCarvoeira(false)]}>Campeche</SelectButton>
        <SelectButton onClick={() => [setShowCarvoeira(true), setShowCampeche(false)]}>Carvoeira</SelectButton>
      </ButtonsDiv>

      <ContentDiv>

        <MapDiv>
          <MapImg src={MapCampeche} alt="Mapa Campeche" />
        </MapDiv>

        <SelectedDiv>

          {showCampeche && (
            <>
              <Subtitulo3>Campeche</Subtitulo3>
              <Texto>Segunda à Sábado das 19h às 23h</Texto>
              <Texto>(48) 99133-8844</Texto>
              <Texto>
                Rua Sabino Anisio da Silveira, 116 - Campeche
              </Texto>
              <Texto>
                Florianópolis - SC
              </Texto>
              <WppDiv>
                <WhatsAppButtonCampeche />
              </WppDiv>
            </>
          )}

          {showCarvoeira && (
            <>
              <Subtitulo3>Carvoeira</Subtitulo3>
              <Texto>Segunda à Sábado das 19h às 23h</Texto>
              <Texto>(48) 99833-3303</Texto>
              <Texto>
                Rua Capitão Romualdo de Barros, 933 - Carvoeira
              </Texto>
              <Texto> Florianópolis - SC
              </Texto>
              <WppDiv>
                <WhatsAppButtonCarvoeira />
              </WppDiv>
            </>
          )}

        </SelectedDiv>

      </ContentDiv>

      <StyleLink href="campechemasbah@gmail.com">Clique aqui para me enviar um email</StyleLink>

    </Container >
  )
}