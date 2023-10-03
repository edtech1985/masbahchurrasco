import styled from "styled-components";

export const CarrosselSection = styled.section`
  display: flex;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

export const CarrosselContainer = styled.div`
  position: relative;
  width: 100vw;

  @media (max-width: 768px) {
    max-width: 100vw;
  }
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  margin-bottom: 1rem;
  
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  width: 100%;
`;

export const ArrowButton = styled.button`
  background: rgba(0, 0, 0, 0.1);
  color: white;
  border: none;
  font-size: 1.5rem;
  padding: 1rem 1rem;
  border-radius: 50%;

  cursor: pointer;
  transition: background-color 1s ease-in-out, 0.5s ease-out;

  &:hover {
    border: 2px solid var(--light-red);
    color: var(--light-red);
    background: rgba(0, 0, 0, 0.85);
  }

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const LeftArrowButton = styled(ArrowButton)`
  left: 0.4rem;
`;

export const RightArrowButton = styled(ArrowButton)`
  right: 4.3rem;
`;

export const IndicatorContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

interface IndicatorProps {
  isActive: boolean;
}

export const Indicator = styled.div<IndicatorProps>`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: ${(props) =>
    props.isActive ? "var(--light-red)" : "rgba(255, 255, 255, 0.75)"};
`;


