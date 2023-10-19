import {
  AddressDiv,
  AddressSubDiv,
  Container,
  MainDiv,
  Paragraph,
  SubTitle,
  Title,
} from "./Home";
import Carousel from "../../components/Carousel";

export default function Home() {
  return (
    <Container>
      <AddressDiv>
        <AddressSubDiv>
          Rua Sabino Anisio da Silveira, 116 - Campeche{" "}
        </AddressSubDiv>
        <AddressSubDiv>
          Rua Cap. Romualdo de Barros, 933 - Carvoeira
        </AddressSubDiv>
      </AddressDiv>

      <Carousel />

      <MainDiv>
        <Title>Bagual antes de ser Gourmet!</Title>
        <SubTitle>🔥 Os melhores rangos da cidade 🔥</SubTitle>
        <Paragraph>🔥 Terça a Sábado das 19h às 23h 🔥</Paragraph>
        <Paragraph>🔥 Domingo somente unidade Campeche 🔥</Paragraph>
      </MainDiv>
    </Container>
  );
}
