import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    div {
        box-sizing: border-box;
    }

    button {
        cursor: pointer;
    }
`;
