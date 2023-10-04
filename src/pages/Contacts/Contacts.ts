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

  @media only screen and (max-width: 768px) {
   width: 100%;
   box-sizing: border-box;
   height: auto;
  }
`;

export const WppDiv = styled.div`
  padding: 1rem;
`;

export const Titulo = styled.h1`
  color: var(--white);
  font-size: 40px;
  margin-bottom: 0.75rem;
  text-align: center;
`;

export const Subtitulo = styled.h2`
  color: var(--red);
  font-size: 18px;
  margin-bottom: 0.5rem;
`;
export const Subtitulo3 = styled.h3`
  font-size: 15px;
  color: var(--red);
  font-weight: bold;
  margin-bottom: 0.75rem;
`;

export const MapImg = styled.img`
  width: 100%;
`;

export const Texto = styled.p`
  color: white;
  font-size: 12px;
  line-height: 1.25rem;
`;

export const StyleLink = styled.a`
  text-decoration: none;
  color: whitesmoke;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SelectButton = styled.button`
  background-color: var(--orange);
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


  &:hover {
    background-color: var(--red);
  }
`;
