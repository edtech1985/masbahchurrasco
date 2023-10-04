import { Container, Location, Paragraph, SubTitle, Title, Unit, UnitsDiv } from "./Place";

export default function Place() {
  return (
    <Container>

      <Title>Sabores em Dobro: Duas Unidades, Uma Experiência Inigualável!</Title>
      <SubTitle>Descubra o Mundo do Churrasco no MasBah! Churrasco</SubTitle>
      <Paragraph>
        Se você é apaixonado por churrasco, temos uma excelente notícia para você! O MasBah! Churrasco está presente em duas localidades incríveis em Florianópolis, para satisfazer o seu desejo por sabores autênticos a qualquer momento.
      </Paragraph>

      <Paragraph>
      Aberto de segunda a sábado, das 19h às 23h.
      </Paragraph>

      <UnitsDiv>
        <Unit>
          <Location>
            Unidade Campeche
          </Location>
          <Paragraph>
            Localizada na Rua Sabino Anisio da Silveira, 116 - Campeche, nossa unidade no Campeche é o local ideal para saborear deliciosos petiscos e sanduíches de churrasco. Estamos prontos para oferecer a você uma experiência gastronômica única e inesquecível.
          </Paragraph>
          <Location>
            Fone (Campeche): (48) 99133-8844
          </Location>
        </Unit>

        <Unit>
          <Location>
            Unidade Carvoeira
          </Location>
          <Paragraph>
            Já em nosso endereço na Rua Cap. Romualdo de Barros, 933 - Carvoeira, você encontrará a mesma qualidade excepcional em carnes e molhos artesanais que fazem do MasBah! Churrasco o seu destino preferido para os melhores rangos da cidade.
          </Paragraph>
          <Location>
            Fone (Carvoeira): (48) 99833-3303
          </Location>
        </Unit>

      </UnitsDiv>

      <Paragraph>
        Venha nos visitar em qualquer uma de nossas unidades e descubra por que somos reconhecidos como uma referência em churrasco de qualidade. Esperamos por você para compartilhar momentos deliciosos e repletos de sabor. Experimente o MasBah! Churrasco e deixe-se levar pelo prazer de uma verdadeira experiência gastronômica!
      </Paragraph>

    </Container>
  )
}