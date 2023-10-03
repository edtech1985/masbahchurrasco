import { Button, Cardapios, Container, ContainerBackgroung, Order, SubTitle, Title } from './Menu';
import { CardapioFrente, CardapioVerso } from '../../components/Cardapio';
import CardsGrid from '../../components/Cards';

export default function Menu() {
  return (
    <>
      <ContainerBackgroung>
        <Container>
          <Title>Delivery Masbah!Churrasco</Title>
          <br />
          <SubTitle>
            Bagual antes de ser Gourmet!<br />
            Sanduíches de Churrasco
          </SubTitle>

          <Order>
            <a
              href="https://api.whatsapp.com/send?phone=5548991338844&text=Olá%20no%20WhatsApp"
              target="_blank" rel="noreferrer"
            >
              <Button type="button">Faça seu pedido | Campeche</Button>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5548998333303&text=Olá%20no%20WhatsApp"
              target="_blank" rel="noreferrer"
            >
              <Button type="button">Faça seu pedido | Carvoeira</Button>
            </a>
          </Order>
        </Container>
      </ContainerBackgroung>

      <Cardapios>
        <CardapioFrente />
        <CardapioVerso />
      </Cardapios>

      <CardsGrid />
    </>
  )
}