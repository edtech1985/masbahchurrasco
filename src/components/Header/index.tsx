import { useState } from "react";
import { BurgerMenuButton, DeliveryButton, HeaderContainer, Logo, LogoTitleDiv, Menu, MenuItem, NavBar, NavbarTitle, StyledNavItem, StyledSocialIcons } from "./Header";
import { Link } from "react-router-dom";
import { FacebookIcon, InstagramIcon, WhatsappIcon, WhatsappIcon2 } from "../SocialIcons";
import LogoImg from '../../assets/logo.jpg'

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  }

  const handleNavClick = () => {
    setIsOpen(false);
  }

  return (
    <>
      <HeaderContainer>

        <LogoTitleDiv>
          <Link to="/">
            <Logo src={LogoImg} alt="Logo" />
          </Link>
          <NavbarTitle>MasBah! Churrasco</NavbarTitle>
        </LogoTitleDiv>

        <NavBar open={isOpen}>
          <Menu>
            <StyledNavItem
              to="/"
              aria-label="Página Inicial"
              onClick={handleNavClick} >
              <MenuItem>Home</MenuItem>
            </StyledNavItem>
            <StyledNavItem
              to="/historia"
              aria-label="Sobre A Casa"
              onClick={handleNavClick}>
              <MenuItem>História</MenuItem>
            </StyledNavItem>
            <StyledNavItem
              to="/cardapio"
              aria-label="Cardápio"
              onClick={handleNavClick}>
              <MenuItem>Cardápio</MenuItem>
            </StyledNavItem>
            <StyledNavItem
              to="/contato"
              aria-label="Contato"
              onClick={handleNavClick}>
              <MenuItem>Contato</MenuItem>
            </StyledNavItem>
          </Menu>
        </NavBar>
        
          <DeliveryButton>Delivery</DeliveryButton>

        <StyledSocialIcons>
          <FacebookIcon />
          <InstagramIcon />
          <WhatsappIcon />
          <WhatsappIcon2 />
        </StyledSocialIcons>

        
        <BurgerMenuButton
          id="BurgerButtonMenu"
          open={isOpen}
          onClick={handleMenuClick}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </BurgerMenuButton>

      </HeaderContainer >
    </>

  )
}

