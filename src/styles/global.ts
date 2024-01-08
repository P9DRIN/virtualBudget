import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue']};
    }
    body{
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-title']};
    -webkit-font-smoothing: antialiased;
}
body, input, textarea, button{
font-weight: 400;
font-size: 1rem;
font-family: 'Roboto', sans-serif;
}

`