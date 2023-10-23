import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  height: auto;
  font-family: Arial, sans-serif;
  padding: 1rem 2rem;
  text-align: center;
`;

export const AddressDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  z-index: 99;
  width: 100vw;
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

export const Title = styled.h1`
  font-size: 24px;
  color: var(--red);
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  color: var(--white);
  margin-bottom: 20px;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  color: var(--orange);
  margin-bottom: 10px;
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
