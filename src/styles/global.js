import { createGlobalStyle } from "styled-components";
import { Fontes } from "./fonts";

export default createGlobalStyle`
  ${Fontes};
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;
  }

  li {
    outline:none;
  }
`;
