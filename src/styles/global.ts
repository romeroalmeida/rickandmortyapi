import { createGlobalStyle } from 'styled-components';

import bg from '../assets/bg-rodape.svg';

const GlobalStyle = createGlobalStyle`
  :root {
  --max-width: 1400px;
  --border-radius: 12px;
  
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  color: #f2f2f2;
  margin: 0;
  padding: 0;
}


body{
  
background-color: #000;

background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='100%25' height='100%25'%3E%3Cdefs%3E%3Cpattern id='p' width='100' height='100' patternUnits='userSpaceOnUse' patternTransform='rotate(30) scale(0.19)'%3E%3Ccircle id='a' data-color='outline' fill='none' stroke='%2366A0D0' stroke-width='5.89' r='.5'%3E%3C/circle%3E%3Cuse xlink:href='%23a' y='100'%3E%3C/use%3E%3Cuse xlink:href='%23a' x='100'%3E%3C/use%3E%3Cuse xlink:href='%23a' x='100' y='100'%3E%3C/use%3E%3Cuse xlink:href='%23a' x='50' y='50'%3E%3C/use%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23p)' width='100%25' height='100%25'%3E%3C/rect%3E%3C/svg%3E");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
position: relative;
/* padding-bottom: 22rem; */
min-height: 100vh;
/* &:after {
  content: '';
  background: url(${bg.src}) bottom no-repeat;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 34.375rem;
  background-size: cover;
  z-index: -1;
} */

}
* {
    text-decoration: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }


body {
  background: rgb(0,0,0);
  background: linear-gradient(220deg,rgba(0,0,0,1) 0%,rgb(7 15 28) 100%);
}

  a {
    color: inherit;
    text-decoration: none;
  }
  `;

export default GlobalStyle;
