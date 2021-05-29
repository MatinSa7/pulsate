import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#logo {
    font-family: 'Damion', cursive;
}

body {
    font-family: 'Alata', sans-serif;
    background: #E5E5E5;
    overflow-x: hidden;
}
`;

export default GlobalStyle;
