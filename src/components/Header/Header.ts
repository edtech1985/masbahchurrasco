import styled from "styled-components";

export const HeaderContainer = styled.header`
background-color: var(--dark);
display: flex;
`

export const Logo = styled.img`
width: 7rem;
`

export const NavBar = styled.nav`
display: flex;	
justify-content: space-between;
align-items: center;
padding: 0 2rem;
box-shadow: 0 0 1rem rgba(0,0,0,.2);
`

export const Menu = styled.ul`
display: flex;
list-style: none;
`

export const MenuItem = styled.li`
margin-left: 2rem;
` 

export const NavbarTitle = styled.h2`
font-size: 2rem;
color: red;
`

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
`
