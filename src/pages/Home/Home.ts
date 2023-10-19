import styled from "styled-components";

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
  background-color: var(--dark);
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
  color: var(--white);
`;

export const MainDiv = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  padding: 2rem;
  @media only screen and (max-width: 300px) {
    padding: 0.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  color: var(--orange);
  margin-bottom: 20px;
  @media only screen and (max-width: 394px) {
    font-size: 20px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  color: var(--orange);
  margin-bottom: 20px;
  @media only screen and (min-width: 300px) and (max-width: 394px) {
    font-size: 17px;
  }
  @media only screen and (max-width: 300px) {
    font-size: 15px;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  color: var(--white);
  margin-bottom: 20px;
  @media only screen and (min-width: 300px) and (max-width: 394px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 300px) {
    font-size: 13px;
  }
`;
