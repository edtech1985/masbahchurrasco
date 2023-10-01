import styled from "styled-components";



export const StyledIconList = styled.ul`
  display: flex;
  margin-top: 1.5rem;
  padding: 0;
  align-items: center;

  @media only screen and (max-width: 600px) {
    margin-top: 0;
    justify-content: center; /* Centraliza horizontalmente */
    flex-wrap: wrap; /* Quebra para várias linhas */
  }
`;

export const StyledIconItem = styled.li`
  min-height: 48px;
  min-width: 48px;
  list-style-type: none;
  font-size: 1.75rem;
  color: var(--red);
  cursor: pointer;
  &:hover {
    color: var(--yellow);
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
    justify-content: center;
  }
`;

export const StyledDiv = styled.div`
  text-align: center;
  vertical-align: center;
  justify-content: center;
`;
