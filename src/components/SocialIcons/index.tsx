import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { StyledIconItem, StyledIconList } from "./StyledSocialIcons";
import { Tooltip } from "react-tooltip";

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
  );
};

export const InstagramIcon = () => {
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
    </StyledIconList>
  );
};

interface TooltipProps {
  content: string;
  place: string;
}
export const WhatsappIcon: React.FC = () => {
  const tooltipProps: TooltipProps = {
    content: "Campeche",
    place: "top",
  };
  return (
    <StyledIconList>
      <StyledIconItem>
        <a
          href="https://api.whatsapp.com/send?phone=5548991338844&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%E2%80%A6"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp MasBah! Churrasco Campeche"
          data-tip={tooltipProps.content}
          data-place={tooltipProps.place}
        >
          <FaWhatsapp />
        </a>
        <Tooltip />
      </StyledIconItem>
    </StyledIconList>
  );
};

export const WhatsappIcon2: React.FC = () => {
  const tooltipProps: TooltipProps = {
    content: "Carvoeira",
    place: "top",
  };
  return (
    <StyledIconList>
      <StyledIconItem>
        <a
          href="https://api.whatsapp.com/send?phone=5548998333303&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%E2%80%A6"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp MasBah! Churrasco Carvoeira"
          data-tip={tooltipProps.content}
          data-place={tooltipProps.place}
        >
          <FaWhatsapp />
        </a>
        <Tooltip />
      </StyledIconItem>
    </StyledIconList>
  );
};
