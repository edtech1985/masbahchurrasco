import styled from "styled-components";

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const Card = styled.div`
  text-align: center;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: auto;

  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;