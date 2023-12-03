import { Container, MainDiv, Paragraph, SubTitle, Title } from "./Home";
import Carousel from "../../components/Carousel";
import AddressBar from "../../components/AddressBar";

export default function Home() {
  return (
    <Container>
      <AddressBar />

      <Carousel />

      <MainDiv>
        <Title>Bagual antes de ser Gourmet!</Title>
        <SubTitle>🔥 Os melhores rangos da cidade 🔥</SubTitle>
        <Paragraph>🔥 Terça a Domingo, das 19h às 23h 🔥</Paragraph>
        <Paragraph>🔥 Domingo somente unidade Campeche 🔥</Paragraph>
      </MainDiv>
    </Container>
  );
}
