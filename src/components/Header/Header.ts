import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--dark);
  width: 100vw;
  max-height: 15vh;
  box-sizing: border-box;
  position: relative;
  border-bottom: 1px solid var(--red);
  box-shadow: 1px 3px 10px rgba(255, 0, 0, 0.5);

  @media only screen and (max-width: 480px) {
    justify-content: left;
  }
`;

export const LogoTitleDiv = styled.div`
  display: flex;
  width: 100%;
  max-width: 50vw;
  margin-left: 3vw;

  @media only screen and (min-width: 992px) and (max-width: 1135px) {
    max-width: 40vw;
    margin-left: 2vw;
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
  font-size: 1.25rem;
  color: var(--red);
  align-items: center; //centraliza verticalmente
  display: flex;
  cursor: pointer;
  padding-left: 1vw;
  white-space: nowrap;

  &:hover {
    text-shadow: -8px 8px 8px rgba(255, 0, 0, 0.75);
    color: var(--white);
    transition: background-position 1s ease-in-out, color 1s ease-in-out;
  }

  @media only screen and (min-width: 681px) and (max-width: 992px) {
    white-space: break-spaces;
  }

  @media only screen and (max-width: 680px) {
    display: none;
  }
`;

interface BurgerMenuButtonProps {
  open: boolean;
}

export const BurgerMenuButton = styled.button<BurgerMenuButtonProps>`
  display: none;

  @media screen and (max-width: 480px) {
    right: 2rem;
    display: block;
    position: relative;
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
      background-color: var(--red);
      border-radius: 15px;
      transform-origin: center;
      transition: transform 1.25s ease-out, opacity 1.25s ease-out;

      &:focus {
        outline: none;
      }
      &:first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      &:nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
      }

      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }

  @media screen and (min-width: 481px) and (max-width: 668px) {
    display: block;
    position: relative;
    right: 2rem;
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
      background-color: var(--red);
      border-radius: 15px;
      transform-origin: center;
      transition: transform 1.25s ease-out, opacity 1.25s ease-out;

      &:focus {
        outline: none;
      }
      &:first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      &:nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
      }

      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }

  @media screen and (min-width: 669px) and (max-width: 992px) {
    display: block;
    position: relative;
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
      background-color: var(--red);
      border-radius: 15px;
      transform-origin: center;
      transition: transform 1.25s ease-out, opacity 1.25s ease-out;

      &:focus {
        outline: none;
      }
      &:first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      &:nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
      }

      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

interface BurgerMenuProps {
  open: boolean;
}

export const NavBar = styled.nav<BurgerMenuProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 992px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    position: fixed;
    top: 0;
    right: 0;
    flex-direction: flex;
    background-color: var(--dark); //fundo bruger menu down
    width: 100%;
    height: 100vh;
    z-index: 999;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const MenuItem = styled.li`
  display: block;
  padding: 0.5vw;
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  white-space: nowrap;
  text-align: center;

  &:hover {
    color: var(--red);
  }

  &::after {
    content: "";
    position: absolute;
    width: calc(77%);
    height: 2px;
    bottom: -1px;
    left: 12%;
    background-color: var(--red);
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
    color: var(--red);
  }

  @media only screen and (min-width: 992px) and (max-width: 1135px) {
    padding: 0.25vw;
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 992px) {
    display: flex;
  }

  @media only screen and (max-width: 600px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const StyledNavItem = styled(Link)`
  display: block;
  padding: 1vw;
  color: #fff;
  text-decoration: none;
  font-size: 1.25rem;
  position: relative;

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const DeliveryButton = styled.button`
  background-color: var(--red);
  color: #fff;
  padding: 0.6rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    background-color: var(--redh);
  }

  @media only screen and (min-width: 992px) and (max-width: 1135px) {
    padding: 0.5rem 1.9rem;
    font-size: 1.1rem;
  }

  @media only screen and (max-width: 480px) {
    margin-right: 30%;
  }

  a {
    background-color: var(--red);
    text-decoration: none;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
      background-color: var(--redh);
    }

    @media only screen and (min-width: 992px) and (max-width: 1135px) {
      font-size: 1.1rem;
    }
  }
`;

export const StyledSocialIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2vw;
  gap: 1vw;
  width: auto;
  box-sizing: border-box;

  @media only screen and (min-width: 992px) and (max-width: 1135px) {
    padding-right: 0rem;
    gap: 0.25vw;
  }

  @media only screen and (min-width: 480px) and (max-width: 992px) {
    padding-right: 3rem;
    gap: 0.5vw;
  }

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
