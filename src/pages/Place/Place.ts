import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  height: auto;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  padding: 1rem 2rem;
  text-align: center;
  `;

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

export const Location = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #ff5722;
`;

export const UnitsDiv = styled.div`
display: flex;
flex-direction: row;	
justify-content: center;
align-items: center;
text-align: center;
width: 100%;
`;

export const Unit = styled.div`
display: block;
margin: 10px;
`;
