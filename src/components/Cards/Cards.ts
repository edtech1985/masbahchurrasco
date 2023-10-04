import styled from "styled-components";

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;

export const Card = styled.div`
  text-align: center;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: auto;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  scroll-behavior: smooth;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 1rem;
  max-width: 80vw;
  max-height: 90vh;
  overflow: auto;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const ModalImage = styled.img`
  height: 80vh;
  max-height: 100%;
`;

export const ModalClose = styled.button`
position: absolute;
border: none;
background-color: transparent;
color: white;
font-size: 1.5rem;
font-weight: bold;
padding: 0.5rem;
cursor: pointer;

&:hover {
  transform: scale(1.1);
  transition: 0.5s;
  color: red;
}

`;

