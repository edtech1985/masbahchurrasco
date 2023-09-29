import styled from "styled-components";

export const ContainerBackgroung = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: black;
  background-image: url("https://receitinhas.com.br/wp-content/uploads/2016/12/hamburguer.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: Arial, sans-serif;
  margin-bottom: 2rem;
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
  `;

export const SubTitle = styled.h2`
  font-size: 2.4rem;
`;

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  `;

export const Button = styled.button`
  background-color: yellow;
  color: red;
  text-decoration: none;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  border: none;
  border-radius: 1.3rem;
  cursor: pointer;
  margin-top: 1rem;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const Card = styled.div`
  text-align: center;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: auto;

  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;
