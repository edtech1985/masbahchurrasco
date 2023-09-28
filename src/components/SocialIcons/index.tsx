// StyledIconItem, StyledIconList, StyledSocialIcons

import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { StyledIconItem, StyledIconList } from "./StyledSocialIcons";


export const FacebookIcon = () => {
  return (
    
      <StyledIconList>
        <StyledIconItem>
          <a
            href="https://www.facebook.com//masbahchurrasco/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook MasBah! Churrasco Campeche"
          >
            <FaFacebook />
          </a>
        </StyledIconItem>
      </StyledIconList>
  )
}

export const SocialIcons = () => {
  return (
      <StyledIconList>
        <StyledIconItem>
          <a
            href="https://www.instagram.com/masbahchurrasco/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram MasBah! Churrasco"
          >
            <FaInstagram />
          </a>
        </StyledIconItem>
        <StyledIconItem>
          <a
            href="https://www.facebook.com//masbahchurrasco/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook MasBah! Churrasco Campeche"
          >
            <FaFacebook />
          </a>
        </StyledIconItem>

        <StyledIconItem>
          <a
            href="https://api.whatsapp.com/send?phone=5548991338844&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%E2%80%A6"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp MasBah! Churrasco Campeche"
          >
            <FaWhatsapp />
          </a>
        </StyledIconItem>
        <StyledIconItem>
          <a
            href="https://api.whatsapp.com/send?phone=5548998333303&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%E2%80%A6"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp MasBah! Churrasco Carvoeira"
          >
            <FaWhatsapp />
          </a>
        </StyledIconItem>
      </StyledIconList>
  )
}