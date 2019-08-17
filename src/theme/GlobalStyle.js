import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,800&display=swap&subset=latin-ext');

/* CSS RESET */

*, *::before, *::after{
        box-sizing:border-box;
        -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    }
    html{
        font-size:62.5%; // happy rems 10px
    }

    body{
        margin:0;
        padding:0;
        font-size:1.6rem;
        font-family: "Montserrat", sans-serif;
        background: hsl(0, 0%, 96%);
    }
    a{
        text-decoration:none;
        color:inherit;
    }
    ul{
        padding:0;
    list-style: none;
    }


`;

export default GlobalStyle;
