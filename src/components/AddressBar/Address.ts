import styled from "styled-components";

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