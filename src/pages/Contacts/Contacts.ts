import styled from "styled-components";

import BGImh from "../../assets/img/fundochamas.jpg";

export const ContainerBackgroung = styled.section`
  width: 100%;
  max-width: 100vw;
  min-height: 70vh;
  background-image: url(${BGImh});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  height: auto; /* Define a altura para ocupar toda a altura da janela */
  margin: auto;
  background-color: rgba(0, 0, 0, 0.6);
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

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const MapDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 1rem 1rem;
  height: 40vh;
  width: 45vw;

  @media only screen and (min-width: 1024px) {
    justify-content: space-evenly;
    width: 30vw;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    box-sizing: border-box;
    height: auto;
  }
`;

export const SelectedDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
  padding: 1rem 1rem;
  height: 40vh;
  width: 45vw;

  @media only screen and (min-width: 1024px) {
    justify-content: space-evenly;
    width: 30vw;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    box-sizing: border-box;
    height: auto;
  }
`;

export const WppDiv = styled.div`
  padding: 1rem;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: var(--red);
  margin-bottom: 10px;
`;

export const Titulo = styled.h2`
  color: var(--white);
  font-size: 28px;
  margin-bottom: 0.75rem;
  text-align: center;
`;

export const Subtitulo = styled.h2`
  color: var(--orange);
  font-size: 20px;
  margin-bottom: 0.5rem;
`;
export const Subtitulo3 = styled.h3`
  font-family: var(--options);
  font-size: 15px;
  color: var(--red);
  margin-bottom: 0.75rem;

  @media only screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const MapImg = styled.img`
  width: 100%;
`;

export const Texto = styled.p`
  color: white;
  font-size: 12px;
  line-height: 1.25rem;

  @media only screen and (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const StyleLink = styled.a`
  text-decoration: none;
  color: whitesmoke;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  gap: 9rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const SelectButton = styled.button`
  background-color: var(--red);
  color: var(--white);
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s;
  width: 20vw;
  min-width: 150px;

  &:active {
    background-color: var(--redh);
    transform: translateY(4px);
  }

  &:hover {
    background-color: var(--redh);
  }
`;
