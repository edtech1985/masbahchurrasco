import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  justify-items: center;
  padding-bottom: 2rem;

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
`;

export const Subtitle = styled.h2`
  font-size: 4rem;
  color: var(--orange);
  font-family: var(--title);
  margin: 2.5rem 2rem 1.5rem;

  @media screen and (max-width: 768px) {
    text-align: center;
    line-height: 3.5rem;
  }
`;

export const Tabela = styled.table`
  line-height: 1.5rem;
  width: 80vw;
  /* margin-top: 2rem; */
  text-align: left;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    width: 95vw;
    /* background-color: green; */
    /* margin-inline: auto;  */
    justify-content: center;
    align-items: center;
  }
`;

export const Caption = styled.td`
  font-family: var(--options);
  color: var(--white);
  font-size: 1.2rem;
  color: var(--white-gray);
  padding-bottom: 1rem;
  padding-right: 1rem;

  td + td {
    text-align: right;

    @media screen and (max-width: 768px) {
      /* background-color: #d9b13b; */
      width: 5vw;
      text-align: right;
    }
  }
`;

export const Bottom = styled.td`
  font-family: var(--options);
  color: var(--white);
  font-size: 1.2rem;
  padding-right: 1rem;

  td + td {
    text-align: right;

    @media screen and (max-width: 768px) {
      /* background-color: #d9b13b; */
      width: 5vw;
      text-align: right;
    }
  }
`;

export const Celula = styled.td`
  font-family: var(--options);
  color: var(--white);
  font-size: 1.2rem;

  td + td {
    text-align: right;

    @media screen and (max-width: 768px) {
      /* background-color: #d9b13b; */
      width: 5vw;
      text-align: right;
    }
  }
`;

export const Cabecalho = styled.th`
  font-family: var(--options);
  padding-bottom: 0.5rem;
  color: var(--orange);
  font-size: 1.2rem;
  text-align: right;
`;

export const Adicionais = styled.div`
  width: 80%;
  border: none;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    /* background-color: #f25922; */
    width: 90vw;
    padding: 0;
    margin-bottom: 0;
  }
`;

export const Churras = styled.div`
  border: 0.25rem dotted var(--white-gray);
  margin-top: 2rem;
  padding: 1.5rem;
  text-align: center;
  width: 70vw;

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;

export const Text = styled.p`
  color: var(--white-gray);
  margin: 2rem;
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
