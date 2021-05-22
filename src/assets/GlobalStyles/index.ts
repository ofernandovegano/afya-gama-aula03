import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  .container {
    width: 75%;
    margin: auto;
    /* background: red; */
  }
  footer {
    text-align: center;
    height: 200px;
  }
`