import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600,800|Satisfy&display=swap&subset=latin-ext');

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
        height:100vh;
        overflow-x:hidden;
    }
    a{
        text-decoration:none;
        color:inherit;
    }
    ul{
        margin:0;
        padding:0;
        list-style: none;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: "Montserrat", sans-serif;
        font-weight:600;
    }
    h1{
        font-size:2.1rem
    }
    h2{
        font-size:1.8rem
    }
    h3{
        font-size:1.5rem;
    }
`;

export default GlobalStyle;
