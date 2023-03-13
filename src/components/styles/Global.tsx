import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle<any>`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Antonio', sans-serif;
        font-family: 'League Spartan', sans-serif;
        background-color: ${({ theme }) => theme.black};
        background-image: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.main}; 
        display: flex;
        justify-content: center;
        height: 100vh;
    }

    h1 {
        font-weight: 700;
        font-family: 'League Spartan', sans-serif;
    }
    p {
        font-weight: 400;
        font-family: 'Antonio', sans-serif;
    }
`;

export default GlobalStyles;
