import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  StyledDevelopedBy,
  StyledDiv,
  StyledFooter,
  StyledIconItem,
  StyledIconList,
  StyledRightsReserved,
} from "./Footer";

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
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
      <StyledDiv>
        <StyledRightsReserved>
          Horário de Atendimento: <br></br>Segunda-feira à Sábado, das 19h às 23h
        </StyledRightsReserved>
        <StyledRightsReserved>
          © {currentYear} Direitos Reservados |{" "}
          <a
            href="https://www.masbahchurrasco.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir para o MasBah! Churrasco"
          >
            <span>MasBah! Churrasco</span>
          </a>
        </StyledRightsReserved>
      </StyledDiv>
      <StyledDevelopedBy>
        Desenvolvido por{" "}
        <a
          href="https://www.edtech1985.com.br/projetos"
          target="_blank"
          rel="noreferrer"
          aria-label="Criação de Websites edtech1985"
        >
          <span>
            <strong>edtech1985 & Karla Dev</strong>
          </span>
        </a>
      </StyledDevelopedBy>
    </StyledFooter>
  );
}

