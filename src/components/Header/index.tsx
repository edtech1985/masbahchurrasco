import React from "react";
import { DeliveryButton, HeaderContainer, Logo, Menu, MenuItem, NavBar, NavbarTitle } from "./Header";

export default function Header() {


  return (
    <>
    <HeaderContainer>
      <div>
        <Logo src="https://img.freepik.com/vetores-premium/logotipo-de-churrasqueira-para-churrasco-com-modelo-de-design-de-icone-de-espatula-e-fogo_568621-40.jpg?w=2000" alt="Logo" />
      </div>
      <NavbarTitle>Mas Bah Churrasco</NavbarTitle>
      <NavBar>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>A Casa</MenuItem>
          <MenuItem>Cardápio</MenuItem>
          <MenuItem>Contato</MenuItem>
        </Menu>
      </NavBar>
      <DeliveryButton>Delivery Button</DeliveryButton>
      <div>Social Links</div>
      </HeaderContainer>
    </>

  )
}

