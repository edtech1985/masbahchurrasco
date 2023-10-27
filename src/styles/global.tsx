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
    text-align: center;
    
    h1{
      font-family: var(--title);
      font-size: 36px;
    }

    h2{
      font-family: var(--title);
      font-size: 28px;
    }

    h3{
      font-family: var(--title);
      font-size: 24px;
    }

    h4{
      font-family: var(--options);
    }

    p{
      font-family: var(--options);
    }
    
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
  --grey: #A8A8A8;
  --title: "Allura", cursive;
  --options: "Source Sans 3", sans-serif;
}
  
`;

export default GlobalStyle;
