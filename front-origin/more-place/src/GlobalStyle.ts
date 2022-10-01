import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

/* @font-face {
  font-family: "appleFont";
  src: url("./assets/fonts/AppleSDGothicNeoSB.ttf");
} */
  html, body, h1, img {
    margin: 0;
    padding: 0;
    border: 0;
    background-color: white;
    /* font-family: 'Apple SD Gothic Neo' !important; */
    font-family: 'Noto Sans KR', sans-serif !important;
    &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  }

  div {
    &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  }

  a {
  text-decoration: none;
  color: inherit;
  }

  input:focus {
    outline: none;
  }

  #chart {
  background: white;
  width: 100%;
  height: 95%;
  margin: 1vw auto;
}
`;
