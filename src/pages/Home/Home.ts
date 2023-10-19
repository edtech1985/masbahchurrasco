import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
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
