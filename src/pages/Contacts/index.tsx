import { WhatsAppButtonCampeche, WhatsAppButtonCarvoeira } from "../../components/Buttons/WhatsAppButton";
import { Container, ContentDiv, MapDiv, MapImg, StyleLink, Subtitulo, Subtitulo3, TextDiv, Texto, TitleDiv, Titulo, WppDiv } from "./Contacts";

import MapCampeche from '../../assets/img/map-campeche.png'


export default function Contacts() {
  return (
    <Container>
      <TitleDiv>
        <Titulo>CONTATO E LOCALIZAÇÃO</Titulo>
        <br />
        <Subtitulo >Bagual antes de ser Gourmet</Subtitulo>
        <Subtitulo>Os melhores Rangos da Cidade</Subtitulo>
      </TitleDiv>

      <ContentDiv id="main-div">

        <MapDiv id="map">

          <MapImg src={MapCampeche} alt="Mapa Campeche" />

        </MapDiv>

        <TextDiv>
          <Texto>Seg à Sáb 19h às 23h</Texto>

          <Subtitulo3>Campeche</Subtitulo3>
          <Texto>(48) 99133-8844</Texto>
          <Texto>
            Rua Sabino Anisio da Silveira, 116 - Silveira, 116 - Campeche<br />
            Florianópolis - SC
          </Texto>

          <Subtitulo3>Carvoeira</Subtitulo3>
          <Texto>(48) 99833-3303</Texto>
          <Texto>
            R. Cap. Romualdo de Barros, 933 - Carvoeira<br /> Florianópolis - SC
          </Texto>

          <StyleLink href="campechemasbah@gmail.com">Clique aqui para me enviar um email</StyleLink>

          <WppDiv>

            <WhatsAppButtonCampeche />
            <WhatsAppButtonCarvoeira />

          </WppDiv>

        </TextDiv>

      </ContentDiv>
    </Container>
  )
}