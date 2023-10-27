import styled from "styled-components";
import BGImh from "../../assets/dishes/brasa.jpg"

export const ContainerBackgroung = styled.section`
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  background-image: url(${BGImh});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  text-align: center;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 3.5rem;

  @media only screen and (max-width: 600px) {
    font-size: 2.5rem;
  }
  `;

export const SubTitle = styled.h2`
  font-size: 2.5rem;
  
  @media only screen and (max-width: 600px) {
    font-size: 1.75rem;
  }
`;

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;

export const Button = styled.button`
  background-color: var(--red);
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  text-transform: uppercase;
  border: 2px solid var(--red);
  border-radius: 1.25rem;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: var(--dark);
    color: var(--red);
    border: 2px solid var(--red);
  }
`;

export const Cardapios = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: auto;
  background-color: var(--dark);
`;
