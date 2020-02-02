import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  #root {
    display: flex;
  }
`;

export default GlobalStyle;