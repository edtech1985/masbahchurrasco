import styled from "styled-components";

// Estilo para o contêiner principal
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
`;

export const AddressDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  z-index: 99;
  width: 100vw;
  background-color: #2c2c2c;
  justify-content: space-evenly;
  padding: 0.25rem 0;

  @media only screen and (max-width: 768px) {
    display: block;
    justify-content: center;
  }
`;

export const AddressSubDiv = styled.div`
  justify-content: center;
  font-size: 0.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.15rem 0;
`;

export const MainDiv = styled.div`
  padding: 2rem;
`;

// Estilo para os títulos
export const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

// Estilo para os parágrafos
export const Paragraph = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

// Estilo para os locais do MasBah! Churrasco
export const Location = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #ff5722;
`;
