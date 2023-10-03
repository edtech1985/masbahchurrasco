import styled from 'styled-components';

// Estilo para o contêiner principal
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto; 
  min-height: 80vh;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
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

