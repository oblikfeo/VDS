'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{
  backgroundColor: string;
  htmlColor: string;
  textColor: string;
}>`

  @font-face {
      font-family: 'Magistral';
      src: url('../../../fonts/Magistral-Regular.woff2') format('woff2');
  }
  
  html {
    background: ${({ htmlColor }) => htmlColor};
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    position: relative;
    min-width: 360px;
    margin: 0;
    background: ${({ backgroundColor }) => backgroundColor};
    color: ${({ textColor }) => textColor};
    font-size: 14px;
    line-height: 20px;
    
    * {
      box-sizing: border-box;
    }
    
    a {
      color: inherit;
      text-decoration: none;
    }
    
    div {
      //cursor: default;
    }
  }
  
  input, textarea {
    font-family: 'Magistral', sans-serif;
  }
  
  input::placeholder, textarea::placeholder {
    font-family: 'Magistral', sans-serif;
  }
`;
