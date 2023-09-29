import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto; /* Define a altura para ocupar toda a altura da janela */
  margin: auto;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 1rem;
`;

export const ContentDiv = styled.div`
  display: flex;
`;

export const MapDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
  padding: 1rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const WppDiv = styled.div`
  padding: 1rem;
  `

export const Titulo = styled.h1`
  color: var(--white);
  font-size: 40px;
`;

export const Subtitulo = styled.h2`
  color: var(--red);
  font-size: 18px;
`;
export const Subtitulo3 = styled.h3`
  font-size: 15px;
  color: yellow;
  font-weight: bold;
`;

export const MapImg = styled.img`
  width: 100%;
  max-width: 40vw;
`;

export const Texto = styled.p`
  color: white;
  font-size: 12px;
`;

export const StyleLink = styled.a`
  text-decoration: none;
  color: whitesmoke;
`;
