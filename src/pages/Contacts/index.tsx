import { Container, StyleLink, Subtitulo, Subtitulo3, Texto, Titulo, WppButton } from "./Contacts";

export default function Contacts() {
  return (
    <Container>
      <Titulo>CONTATO e LOCALIZAÇÃO</Titulo>
      <Subtitulo >Bagual antes de ser Gourmet</Subtitulo>
      <Subtitulo>Os melhores Rangos da Cidade</Subtitulo>

      <Texto>Seg à Sáb 19h às 23h</Texto>

      <Subtitulo3>Campeche</Subtitulo3>
      <Texto>99133-8844</Texto>
      <Texto>
        Rua Sabino Anisio da Silveira, 116 - Silveira, 116 - Campeche,
        Florianópolis - SC, 88065-033
      </Texto>

      <Subtitulo3>Carvoeira</Subtitulo3>
      <Texto>99833-3303</Texto>
      <Texto>
        R. Cap. Romualdo de Barros, 933 - Carvoeira, Florianópolis - SC,
        88040-600
      </Texto>

      <StyleLink href="campechemasbah@gmail.com">Clique aqui para me enviar um email</StyleLink>


    <WppButton
      href="https://api.whatsapp.com/send?phone=5548991338844&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%E2%80%A6"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp MasBah! Churrasco Campeche"
    >Campeche</WppButton>
    <WppButton
    href="https://api.whatsapp.com/send?phone=5548998333303&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%E2%80%A6"
    target="_blank"
    rel="noreferrer"
    aria-label="WhatsApp MasBah! Churrasco Carvoeira"

    >Carvoeira</WppButton>

    </Container>
  )

}