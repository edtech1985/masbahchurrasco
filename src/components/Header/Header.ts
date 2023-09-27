import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vw;
  background-color: var(--dark);
  width: 100vw;
  max-height: 12vh;
  height: 12vh;
  box-sizing: border-box;
  position: relative;
  border-bottom: 1px solid var(--red);
  box-shadow: 1px 3px 10px rgba(255, 0, 0, 0.5);

  a {
    text-decoration: none;
  }
`;

export const Logo = styled.img`
  width: auto;
  height: 10vh;
  min-width: 48px;
  min-height: 48px;
  transition: filter 0.5s ease-in-out;

  &:hover {
    filter: brightness(1.5);
  }
`;

export const NavbarTitle = styled.h2`
  font-size: 2rem;
  color: var(--red);
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  &:hover {
    text-shadow: -8px 8px 8px rgba(255, 0, 0, 0.75);
    color: var(--white);
    transition: background-position 1s ease-in-out, color 1s ease-in-out;
  }

  @media only screen and (min-width: 600px) and (max-width: 992px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (min-width: 401px) and (max-width: 600px) {
    font-size: 1.75rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (min-width: 340px) and (max-width: 420px) {
    font-size: 1.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 340px) {
    font-size: 1.25rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const BurgerMenuButton = styled.button`
  display: none;

  @media screen and (max-width: 992px) {
    display: block;
    position: absolute;
    top: 2rem;
    right: 2.5rem;
    z-index: 999;
    width: 2rem;
    height: 2rem;
    background-color: transparent;
    border: none;
    cursor: pointer;

    span {
      display: block;
      width: 3rem;
      height: 0.25rem;
      margin-bottom: 0.75rem;
      position: relative;
      background-color: var(--light-red);
      border-radius: 15px;
      transform-origin: center;
      transition: transform 1.25s ease-out, opacity 1.25s ease-out;

      &:focus {
        outline: none;
      }
    }
  }
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

export const MenuItem = styled.li`
  display: block;
  padding: 1vw;
  color: #fff;
  text-decoration: none;
  font-size: 1.25rem;
  position: relative;

  &:hover {
    color: var(--dark-red);
  }

  &::after {
    content: "";
    position: absolute;
    width: calc(77%);
    height: 2px;
    bottom: -1px;
    left: 12%;
    background-color: var(--light-red);
    opacity: 0;
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    transform: scaleX(0);
    transform-origin: right;
  }

  &:hover::after {
    opacity: 1;
    transform: scaleX(1);
    transform-origin: center;
  }

  &.active {
    color: var(--light-red);
  }

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const DeliveryButton = styled.button`
  background-color: var(--orange);
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.25);
    background-color: var(--red);
  }
`;
