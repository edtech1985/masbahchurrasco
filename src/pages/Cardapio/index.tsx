import {
  Adicionais,
  Bottom,
  Cabecalho,
  Cabecalho1,
  Caption,
  Celula,
  Churras,
  Container,
  H3,
  H4,
  Subtitle,
  Tabela,
  Td3,
  TdTdCel,
  Text,
  Title,
} from "./Cardapio";

export default function Cardapio() {
  return (
    <Container>
      <Title>Cardápio</Title>

      <Subtitle>Petiscos</Subtitle>
      <Tabela>
        <tr>
          <Celula>
            <strong>Assado de Vazio Angus</strong>
          </Celula>
          <Celula>R$68</Celula>
        </tr>
        <tr>
          <Caption>
            400 g de carne assada na hora, pão, chimichurri e farofa
          </Caption>
        </tr>

        <tr>
          <Celula>
            <strong>Assado de Frango</strong>
          </Celula>
          <Celula>R$48</Celula>
        </tr>
        <tr>
          <Caption>
            400 g de carne assada na hora, pão, chimichurri e farofa
          </Caption>
        </tr>

        <tr>
          <Celula>
            <strong>Assado de Coração</strong>
          </Celula>
          <Celula>R$45</Celula>
        </tr>
        <tr>
          <Caption>
            400 g de carne assada na hora, pão, chimichurri e farofa
          </Caption>
        </tr>

        <tr>
          <Celula>
            <strong>Batata Frita</strong>
          </Celula>
          <Celula>R$18</Celula>
        </tr>
        <tr>
          <Caption>Pequena</Caption>
        </tr>

        <tr>
          <Celula>
            <strong>Batata Frita</strong>
          </Celula>
          <Celula>R$28</Celula>
        </tr>
        <tr>
          <Caption>Grande</Caption>
        </tr>

        <tr>
          <Celula>
            <strong>Polenta Frita</strong>
          </Celula>
          <Celula>R$15</Celula>
        </tr>
        <tr>
          <Caption>Pequena</Caption>
        </tr>

        <tr>
          <Celula>
            <strong>Polenta Frita</strong>
          </Celula>
          <Celula>R$25</Celula>
        </tr>
        <tr>
          <Caption>Grande</Caption>
        </tr>
      </Tabela>

      <Subtitle>Petisco Especial</Subtitle>

      <Tabela>
        <tr>
          <Celula>
            <strong>Te Ilumina!</strong>
          </Celula>
          <Celula>R$52</Celula>
        </tr>

        <tr>
          <Caption>
            200g de fraldinha defumada por 20h, 500g de batata frita, molho
            barbecue e molho gorgonzola
          </Caption>
        </tr>
      </Tabela>

      <Subtitle>Sanduíches de Churrasco</Subtitle>
      <H3>
        Pão de trigo com 15 ou 20 cm, maionese caseira, alface, cebola roxa,
        molho barbecue, queijo mussarela flambado e orégano
      </H3>

      <Tabela className="sandwiches">
        <tr>
          <Cabecalho1></Cabecalho1>
          <Cabecalho>15cm</Cabecalho>
          <Cabecalho>20cm</Cabecalho>
        </tr>

        <tr>
          <Celula>
            <strong>Não te mixa!</strong>
          </Celula>
          <Td3>R$38</Td3>
          <Td3>R$46</Td3>
        </tr>

        <tr>
          <Caption>Fraldinha defumada</Caption>
        </tr>

        <tr>
          <Celula>
            <strong>Fronteira</strong>
          </Celula>
          <Td3>R$37</Td3>
          <Td3>R$43</Td3>
        </tr>

        <tr>
          <Caption>Linguiça artesanal</Caption>
        </tr>

        <tr>
          <Celula>
            <strong>Maragato</strong>
          </Celula>
          <Td3>R$36</Td3>
          <Td3>R$44</Td3>
        </tr>

        <tr>
          <Caption>
            Pernil de porco defumado 20h, bacon, mostarda e geléia apimentada
          </Caption>
        </tr>

        <tr>
          <Celula>
            <strong>Charrua</strong>
          </Celula>
          <Td3>R$35</Td3>
          <Td3>R$43</Td3>
        </tr>

        <tr>
          <Caption>Coração de frango, alho e molho gorgonzola</Caption>
        </tr>

        <tr>
          <Celula>
            <strong>Tri Massa!</strong>
          </Celula>
          <Td3>R$33</Td3>
          <Td3>R$40</Td3>
        </tr>

        <tr>
          <Caption>Sobrecoxa de frango com bacon</Caption>
        </tr>

        <tr>
          <Celula>
            <strong>Vegetariano</strong>
          </Celula>
          <Td3>R$27</Td3>
          <Td3>R$33</Td3>
        </tr>

        <tr>
          <Caption>
            Abobrinha grelhada, rúcula, tomate confit, queijo duplo
          </Caption>
        </tr>
      </Tabela>

      <Subtitle>Pratos “Ao Pampa”</Subtitle>
      <H3>
        180g de carne, molho barbecue, maionese caseira, queijo duplo, farofa,
        alface, rúcula, molho chimichurri, tomate confit e cebola roxa
      </H3>

      <Tabela>
        <tr>
          <Bottom>
            <strong>Fraldinha defumada 20h</strong>
          </Bottom>
          <Celula>R$49</Celula>
        </tr>

        <tr>
          <Celula>
            <strong>Pernil defumado 20h</strong>
          </Celula>
          <Celula>R$47</Celula>
        </tr>

        <tr>
          <Caption>Com geléia, mostarda e bacon</Caption>
        </tr>

        <tr>
          <Celula>
            <strong>Sobrecoxa desossada</strong>
          </Celula>
          <Celula>R$45</Celula>
        </tr>

        <tr>
          <Caption>De frango com bacon</Caption>
        </tr>

        <tr>
          <Bottom>
            <strong>Linguiça Parrilla</strong>
          </Bottom>
          <Celula>R$45</Celula>
        </tr>
        <tr>
          <Bottom>
            <strong>Vegetariano</strong>
          </Bottom>
          <Celula>R$38</Celula>
        </tr>
      </Tabela>

      <Subtitle>Adicionais</Subtitle>

      <Adicionais>
        <Tabela className="additional">
          <tr>
            <Celula>
              <strong>Fraldinha def.</strong>
            </Celula>
            <TdTdCel>R$10</TdTdCel>
          </tr>
          <tr>
            <Celula>
              <strong>Hamburguer</strong>
            </Celula>
            <TdTdCel>R$10</TdTdCel>
          </tr>
          <tr>
            <Celula>
              <strong>Frango</strong>
            </Celula>
            <TdTdCel>R$8</TdTdCel>
          </tr>
          <tr>
            <Celula>
              <strong>Bacon</strong>
            </Celula>
            <TdTdCel>R$7</TdTdCel>
          </tr>
          <tr>
            <Celula>
              <strong>Coração</strong>
            </Celula>
            <TdTdCel>R$7</TdTdCel>
          </tr>
          <tr>
            <Celula>
              <strong>Gorgonzola</strong>
            </Celula>
            <TdTdCel>R$8</TdTdCel>
          </tr>
          <tr>
            <Celula>
              <strong>Queijo</strong>
            </Celula>
            <TdTdCel>R$6</TdTdCel>
          </tr>
        </Tabela>

        <Tabela className="additional">
          <tr>
            <Celula>
              <strong>Catupiry</strong>
            </Celula>
            <TdTdCel>R$6</TdTdCel>
          </tr>
          <tr>
            <Celula>
              <strong>Tomatinho</strong>
            </Celula>
            <TdTdCel>R$6</TdTdCel>
          </tr>
          <tr>
            <Celula>
              <strong>Chimichurri</strong>
            </Celula>
            <TdTdCel>R$6</TdTdCel>
          </tr>
          <tr>
            <Celula>
              <strong>Geléia</strong>
            </Celula>
            <TdTdCel>R$6</TdTdCel>
          </tr>
          <tr>
            <Celula>
              <strong>Abobrinha</strong>
            </Celula>
            <TdTdCel>R$5</TdTdCel>
          </tr>
          <tr>
            <Celula>
              <strong>Rúcula</strong>
            </Celula>
            <TdTdCel>R$4</TdTdCel>
          </tr>
          <tr>
            <Celula>
              <strong>Maionese</strong>
            </Celula>
            <TdTdCel>R$5</TdTdCel>
          </tr>
        </Tabela>
      </Adicionais>

      <Subtitle>O Terror das Chapas</Subtitle>

      <Tabela>
        <tr>
          <Celula>
            <strong>Milonga</strong>
          </Celula>
          <Celula>R$39</Celula>
        </tr>

        <tr>
          <Caption>
            Hamburguer 160gr, pão brioche, maionese caseira, alface, cebola
            roxa, tomate cereja, mussarela e ovo
          </Caption>
        </tr>

        <tr>
          <Celula>
            <strong>Taura</strong>
          </Celula>
          <Celula>R$49</Celula>
        </tr>

        <tr>
          <Caption>
            Hamburguer 320gr, pão brioche, maionese caseira, alface, cebola
            roxa, tomate cereja, duplo cheddar e bacon
          </Caption>
        </tr>
      </Tabela>

      <Churras>
        <H4>Turbine seu churrasco com a nossa</H4>
        <Subtitle>Costela defumada</Subtitle>
        <H4>Congelada e embalada à vácuo</H4>
        <Text>
          Pronta para servir em 20 min de molho na água quente. Venda sob
          encomenda.
        </Text>
      </Churras>

      <Subtitle>Sobremesa dos Guris</Subtitle>

      <Tabela>
        <tr>
          <Celula>
            <strong>Te lambuza 1</strong>
          </Celula>
          <Celula>R$20</Celula>
        </tr>

        <tr>
          <Caption>
            Panqueca com Doce de leite, queijo flambado e açúcar caramelizado
          </Caption>
        </tr>
        <tr>
          <Celula>
            <strong>Te lambuza 2</strong>
          </Celula>
          <Celula>R$23</Celula>
        </tr>

        <tr>
          <Caption>
            Panqueca com Doce de leite, banana, canela, queijo flambado e açúcar
            caramelizado
          </Caption>
        </tr>
      </Tabela>

      <Subtitle>Bebidas</Subtitle>

      <Tabela>
        <tr>
          <Bottom>
            <strong>Refrigerante Lata</strong>
          </Bottom>
          <Celula>R$7</Celula>
        </tr>
        <tr>
          <Bottom>
            <strong>Heineken Long Neck</strong>
          </Bottom>
          <Celula>R$10</Celula>
        </tr>
        <tr>
          <Bottom>
            <strong>Água</strong>
          </Bottom>
          <Celula>R$6</Celula>
        </tr>
      </Tabela>
    </Container>
  );
}
