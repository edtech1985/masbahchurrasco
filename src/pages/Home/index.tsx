import { Container, Location, MainDiv, Paragraph, Title } from "./Home";
import Carousel from "../../components/Carousel";

export default function Home() {
  return (
    <Container>
      <Carousel />
      <MainDiv>
        <Title>MasBah! Churrasco: A Arte do Churrasco sobre Rodas</Title>
        <Location>
          Churrasco sobre Rodas na Praia do Campeche e na Carvoeira
        </Location>
        <Paragraph>
          Sabor Autêntico e Variedade Incomparável
        </Paragraph>
        <Paragraph>
          Na Praia do Campeche e na Carvoeira, você encontra o MasBah! Churrasco, o novo ícone da gastronomia local. Com paixão pelo churrasco tradicional e autêntico, trazemos até você uma experiência única que une a conveniência da churrasqueira e forno sobre rodas à qualidade dos nossos petiscos e sanduíches de churrasco com molhos artesanais.
        </Paragraph>
        <Paragraph>
          O MasBah! Churrasco é a escolha perfeita para quem busca o verdadeiro sabor do churrasco, em qualquer momento e em qualquer lugar.
        </Paragraph>
        <Paragraph>
          Nosso cardápio oferece uma variedade de opções que vão desde petiscos até sanduíches recheados de sabor, tudo preparado com carnes selecionadas e molhos especiais, garantindo um verdadeiro festival de sabores.
        </Paragraph>
        <Paragraph>
          Além disso, nossas unidades na Praia do Campeche e na Carvoeira proporcionam um ambiente descontraído, onde você pode desfrutar de momentos deliciosos em boa companhia.
        </Paragraph>
        <Paragraph>
          Venha conhecer o MasBah! Churrasco e descubra o segredo por trás dos melhores rangos da cidade. Esperamos por você!
        </Paragraph>
      </MainDiv>
    </Container>
  );
}