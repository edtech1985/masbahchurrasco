import styled from 'styled-components';

// Estilo para o contêiner principal
export const Container = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Define a altura para ocupar toda a altura da janela */
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  padding: 20px;
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

// Estilo para os locais do MásBah! Churrasco
export const Location = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #ff5722;
`;

