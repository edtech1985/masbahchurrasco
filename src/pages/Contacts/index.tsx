import { WhatsAppButtonCampeche, WhatsAppButtonCarvoeira } from "../../components/Buttons/WhatsAppButton";
import { ButtonsDiv, Container, ContentDiv, MapDiv, SelectButton, SelectedDiv, StyleLink, Subtitulo, Subtitulo3, Texto, Title, TitleDiv, Titulo, WppDiv } from "./Contacts";

import { useState } from "react";

export default function Contacts() {

  const [showCampeche, setShowCampeche] = useState(true);
  const [showCarvoeira, setShowCarvoeira] = useState(false);

  return (
    <Container>
      <TitleDiv>
      <Title>Sabores em Dobro: Duas Unidades, Uma Experiência Inigualável!</Title>
        <Titulo>Contato e Localização</Titulo>
        <Subtitulo>Bagual antes de ser Gourmet</Subtitulo>
        <Subtitulo>Os melhores rangos da cidade</Subtitulo>
      </TitleDiv>

      <ButtonsDiv>
        <SelectButton onClick={() => [setShowCampeche(true), setShowCarvoeira(false)]}>Campeche</SelectButton>
        <SelectButton onClick={() => [setShowCarvoeira(true), setShowCampeche(false)]}>Carvoeira</SelectButton>
      </ButtonsDiv>

      <ContentDiv>

        {showCampeche && (
          <>
            <MapDiv>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4395481793936!2d-48.508586190623014!3d-27.6728065761031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273b09b3bd63af%3A0x536efac9d8576359!2sRua%20Sabino%20Anisio%20da%20Silveira%2C%20116%20-%20Campeche%2C%20Florian%C3%B3polis%20-%20SC%2C%2088065-033!5e0!3m2!1spt-BR!2sbr!4v1696441409556!5m2!1spt-BR!2sbr"
                title="Mapa Campeche"
                width="400"
                height="300"
                style={{ border: 0 } as any}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </MapDiv>

            <SelectedDiv>
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
            </SelectedDiv>
          </>
        )}

        {showCarvoeira && (
          <>
            <MapDiv>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.697796774074!2d-48.52975792402675!3d-27.602897376242613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952739ad3e1236b1%3A0x148a42555d573beb!2sR.%20Cap.%20Romualdo%20de%20Barros%2C%20933%20-%20Carvoeira%2C%20Florian%C3%B3polis%20-%20SC%2C%2088040-600!5e0!3m2!1spt-BR!2sbr!4v1696442028389!5m2!1spt-BR!2sbr"
                title="Mapa Carvoeira"
                width="400"
                height="300"
                style={{ border: 0 } as any}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </MapDiv>

            <SelectedDiv>
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
            </SelectedDiv>

          </>
        )}

      </ContentDiv>

    </Container >
  )
}