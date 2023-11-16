import {
  StyledDevelopedBy,
  StyledDiv,
  StyledDiv2,
  StyledFooter,
  StyledIconList,
  StyledRightsReserved,
} from "./Footer";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsappIcon,
  WhatsappIcon2,
} from "../SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <StyledIconList>
        <FacebookIcon />
        <InstagramIcon />
        <WhatsappIcon />
        <WhatsappIcon2 />
      </StyledIconList>

      <StyledDiv>
        <StyledRightsReserved>
          Horário de Atendimento: <br></br>Segunda-feira à Sábado, das 19h às
          23h
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
        <StyledDevelopedBy>
          Desenvolvido por{" "}
          <a
            href="https://www.edtech1985.com.br/projetos"
            target="_blank"
            rel="noreferrer"
            aria-label="Criação de Websites edtech1985"
          >
            <span>
              <strong>edtech1985 & KarlaDev</strong>
            </span>
          </a>
        </StyledDevelopedBy>
      </StyledDiv>
      <StyledDiv2></StyledDiv2>
    </StyledFooter>
  );
}
