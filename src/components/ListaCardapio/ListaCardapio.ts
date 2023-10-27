import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  justify-items: center;
  padding-bottom: 2rem;
  box-sizing: border-box;
  max-width: 100vw;

  @media screen and (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-family: var(--title);
  font-size: 5.5rem;
  color: red;
  margin-top: 2.5rem;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    font-family: var(--mobile);
    font-size: 3.5rem;
    white-space: break-spaces;    
  }
`;

export const Subtitle = styled.h2`
  font-size: 4rem;
  color: var(--orange);
  font-family: var(--title);
  margin: 2vw 0;
  white-space: break-spaces;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
    line-height: 3.5rem;
    margin-top: 2.5rem;
  }
`;

export const H3 = styled.h3`
  font-family: var(--options);
  font-size: 1.5rem;
  margin: 1rem auto;
  color: var(--white);
  width: 50vw;
  text-align: center;
  color: var(--white-gray);

  @media screen and (max-width: 768px) {
    width: 90vw;
    font-size: 1.3rem;
  }
`;

export const H4 = styled.h4`
  font-family: var(--options);
  font-size: 1.8rem;
  color: var(--white);
  margin-top: 2rem;
`;

export const Text = styled.p`
  color: var(--white-gray);
  margin: 2rem;
`;

export const Tabela = styled.table`
  line-height: 1.5rem;
  width: 80vw;
  text-align: left;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0rem 2rem;
  }
`;

export const TabelaSand = styled.table`
  line-height: 1.5rem;
  width: 80vw;
  text-align: left;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    padding: 0rem;
    &:first-child {
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Td3 = styled.td`
  font-family: var(--options);
  color: var(--white);
  font-size: 1.2rem;
  padding-left: 3rem;
  text-align: right;

  @media screen and (max-width: 768px) {
    padding-left: 0rem;
  }
`;

export const Caption = styled.td`
  font-family: var(--options);
  color: var(--white);
  font-size: 1.2rem;
  color: var(--white-gray);
  padding-bottom: 1rem;
  padding-right: 1rem;

  @media screen and (max-width: 768px) {
    width: auto;
  }
`;

export const Bottom = styled.td`
  font-family: var(--options);
  color: var(--white);
  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
    text-align: left;
    padding-bottom: 1rem;
  }
`;

export const Celula = styled.td`
  font-family: var(--options);
  color: var(--white);
  font-size: 1.2rem;
`;

export const TdTdCel = styled.td`
  font-family: var(--options);
  color: var(--white);
  font-size: 1.2rem;
  text-align: right;

  @media screen and (max-width: 768px) {
    width: 5vw;
    text-align: right;
  }
`;

export const Cabecalho1 = styled.th`
  font-family: var(--options);
  padding-bottom: 0.5rem;
  color: var(--orange);
  font-size: 1.2rem;
  text-align: left;
`;

export const Cabecalho = styled.th`
  font-family: var(--options);
  padding-bottom: 0.5rem;
  color: var(--orange);
  font-size: 1.2rem;
  text-align: right;

  @media screen and (max-width: 768px) {
    width: auto;
    padding-left: 0.75rem;
  }
`;

export const Adicionais = styled.div`
  width: 80vw;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    width: 100vw;
    margin-bottom: 0;
  }
`;

export const Churras = styled.div`
  border: 2px dotted var(--grey);
  margin-top: 2rem;
  padding: 1.5rem;
  text-align: center;
  max-width: 90vw;

  @media screen and (max-width: 768px) {
    border: 1px dotted var(--grey);
    max-width: 80vw;
    padding: 0;
  }
`;
