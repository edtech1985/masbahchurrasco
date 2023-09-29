import { Button, Card, CardImage, Cards, Container, ContainerBackgroung, Order, SubTitle, Title } from './Menu';
import './style.css';
import Prato1 from '../../assets/dishes/masbah (1).jpg';
import Prato2 from '../../assets/dishes/masbah (2).jpg';
import Prato3 from '../../assets/dishes/masbah (3).jpg';
import Prato4 from '../../assets/dishes/masbah (4).jpg';
import Prato5 from '../../assets/dishes/masbah (5).jpg';
import Prato6 from '../../assets/dishes/masbah (6).jpg';
import Prato7 from '../../assets/dishes/masbah (7).jpg';
import Prato8 from '../../assets/dishes/masbah (8).jpg';


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

<Cards>
<Card><CardImage src={Prato1} alt="" /></Card>
<Card><CardImage src={Prato2} alt="" /></Card>
<Card><CardImage src={Prato3} alt="" /></Card>
<Card><CardImage src={Prato4} alt="" /></Card>
<Card><CardImage src={Prato5} alt="" /></Card>
<Card><CardImage src={Prato6} alt="" /></Card>
<Card><CardImage src={Prato7} alt="" /></Card>
<Card><CardImage src={Prato8} alt="" /></Card>
<Card><CardImage src={Prato8} alt="" /></Card>
<Card><CardImage src={Prato8} alt="" /></Card>
<Card><CardImage src={Prato8} alt="" /></Card>
<Card><CardImage src={Prato8} alt="" /></Card>
</Cards>
</>

  )
}