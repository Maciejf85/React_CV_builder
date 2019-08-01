import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600,800&display=swap&subset=latin-ext');

    *, *::before, *::after{
        box-sizing:border-box;
    }
    html{
        font-size:62.5%; // happy rems
    }

    body{
        font-size:1.6rem;
        font-family: "Montserrat", sans-serif;
    }


`;


export default GlobalStyle;