import React from "react";
import { BurgerMenuButton, DeliveryButton, HeaderContainer, Logo, Menu, MenuItem, NavBar, NavbarTitle, StyledSocialIcons } from "./Header";
import { Link } from "react-router-dom";
import { FacebookIcon, InstagramIcon, WhatsappIcon, WhatsappIcon2 } from "../SocialIcons";

export default function Header() {

  const [isOpen, setIsOpen] = React.useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  }

  const handleNavClick = () => {
    setIsOpen(false);
  }

  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <Logo src="https://img.freepik.com/vetores-premium/logotipo-de-churrasqueira-para-churrasco-com-modelo-de-design-de-icone-de-espatula-e-fogo_568621-40.jpg?w=2000" alt="Logo" />
        </Link>
        <NavbarTitle>Mas Bah Churrasco</NavbarTitle>

        <BurgerMenuButton
          id="BurgerButtonMenu"
          aria-expanded={isOpen ? "true" : "false"}
          onClick={handleMenuClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </BurgerMenuButton>

        <NavBar>
          <Menu>
            <Link to="/" aria-label="Página Inicial"  ><MenuItem  >Home</MenuItem></Link>
            <Link to="/casa"><MenuItem>A Casa</MenuItem></Link>
            <Link to="/cardapio"><MenuItem>Cardápio</MenuItem></Link>
            <Link to="/contato"><MenuItem>Contato</MenuItem></Link>
          </Menu>
        </NavBar>
        <DeliveryButton>Delivery Button</DeliveryButton>
        <StyledSocialIcons>

          <FacebookIcon />
          <InstagramIcon />
          <WhatsappIcon />
          <WhatsappIcon2 />

        </StyledSocialIcons>
      </HeaderContainer>
    </>

  )
}

