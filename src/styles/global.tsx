import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    height: auto;
    min-height: 100vh;
    max-width: 100vw;
    display: flex;
    justify-content: center;
    background-color: var(--dark);
    color: var(--white);
    
    @media only screen and (max-width: 600px) {
      width: 100vw;
      height: auto;
    }
  }

:root {
  --dark: #080D09;
  --yellow: #D9B13B;
  --orange: #F28A2E;
  --red: #F25922;
  --white: #F2F2F2;
}
  
`;

export default GlobalStyle;
