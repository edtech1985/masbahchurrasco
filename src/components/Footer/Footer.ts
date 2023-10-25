import styled from "styled-components";

import BgImg from "../../assets/img/newbtbar.png";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 100vw;
  box-sizing: border-box;
  border-top: 1px solid var(--red);
  background-image: url(${BgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  @media only screen and (max-width: 600px) {
    padding-top: 0;
    padding-bottom: 1rem;
    justify-content: center;
    height: auto;
    display: block;
  }
`;

export const StyledIconList = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 2vw;
  justify-content: flex-start;
  width: 33%;

  @media only screen and (max-width: 600px) {
    justify-content: center; /* Centraliza horizontalmente */
    flex-wrap: wrap; /* Quebra para várias linhas */
    width: 100%;
    padding: 0;
    height: auto;
  }
`;

export const StyledIconItem = styled.li`
  min-height: 48px;
  min-width: 48px;
  margin-left: 1vw;
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
    margin-left: 0;
  }
`;

export const StyledRightsReserved = styled.p`
  font-size: 1.25vw;
  margin-bottom: 0.25vw;
  cursor: pointer;
  a {
    text-decoration: none;
    color: var(--red);
    &:hover {
      color: var(--yellow);
    }
  }
  span {
    color: var(--red);
    &:hover {
      color: var(--yellow);
    }
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;
    margin-bottom: 5px;
  }
`;

export const StyledDevelopedBy = styled.p`
  margin-right: 1rem;
  font-size: 1.25vw;
  cursor: pointer;
  a {
    text-decoration: none;
    color: var(--red);

    &:hover {
      color: var(--yellow);
    }
  }
  span {
    color: var(--red);

    &:hover {
      color: var(--yellow);
    }
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.5rem;
  }
`;

export const StyledDiv = styled.div`
  text-align: center;
  vertical-align: center;
  justify-content: center;
  width: 33%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledDiv2 = styled.div`
  width: 33%;

  @media only screen and (max-width: 600px) {
    display: none;
    width: 0;
  }
`;
