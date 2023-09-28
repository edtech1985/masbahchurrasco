import styled from "styled-components";

export const Container = styled.section`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh; /* Define a altura para ocupar toda a altura da janela */
  font-family: Arial, sans-serif;
  padding: 20px;
`

export const Titulo = styled.h1`
  color: orange;
  font-size: 40px;
  `

  export const Subtitulo = styled.h2`
  color: red;
  `

export const Texto = styled.p`
  color: white;
  font-size: 12px;
`
export const Subtitulo3 = styled.h3`
  font-size: 20px;
  color: yellow;
  font-weight: bold;
`

export const StyleLink = styled.a`
  text-decoration: none;
  color: whitesmoke;
`

export const WppButton = styled.a`
  background-color: #25d366;
  color: white;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  width: 200px;
  
  &:hover {
    background-color: #128c7e;
  }
`