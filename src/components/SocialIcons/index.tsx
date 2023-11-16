import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { StyledIconItem, StyledIconList } from "./StyledSocialIcons";
import 'react-tooltip/dist/react-tooltip.css'
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
}

export const WhatsappIcon: React.FC = () => {
  const tooltipProps: TooltipProps = {
    content: "Campeche",
  };
  return (
    <StyledIconList>
      <StyledIconItem>
        <a
          href="https://api.whatsapp.com/send?phone=5548991338844&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%E2%80%A6"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp MasBah! Churrasco Campeche"
          data-tooltip-id={tooltipProps.content}
          data-tooltip-content={tooltipProps.content}
        >
          <FaWhatsapp />
        </a>
        <Tooltip id={tooltipProps.content} />
      </StyledIconItem>
    </StyledIconList>
  );
};

export const WhatsappIcon2: React.FC = () => {
  const tooltipProps: TooltipProps = {
    content: "Carvoeira",
  };
  return (
    <StyledIconList>
      <StyledIconItem>
        <a
          href="https://api.whatsapp.com/send?phone=5548998333303&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%E2%80%A6"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp MasBah! Churrasco Carvoeira"
          data-tooltip-id={tooltipProps.content}
          data-tooltip-content={tooltipProps.content}
        >
          <FaWhatsapp />
        </a>
        <Tooltip id={tooltipProps.content}  style={{
          fontSize: "15px",
          backgroundColor: "red",
          borderRadius: "50px",
        }}/>
      </StyledIconItem>
    </StyledIconList>
  );
};
