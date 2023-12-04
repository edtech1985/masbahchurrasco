import styled from "styled-components";

export const StyledIconList = styled.ul`
  display: flex;
  margin-top: 1.5rem;
  padding: 0;
  align-items: center;

  @media only screen and (max-width: 600px) {
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
    color: var(--redh);
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const StyledDiv = styled.div`
  text-align: center;
  vertical-align: center;
  justify-content: center;
`;
