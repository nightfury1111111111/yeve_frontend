import { createGlobalStyle } from 'styled-components';

import BeVietNamPro from '../public/font/BeVietNamPro-Regular.ttf';
import Inter from '../public/font/Inter.ttf';
const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'BeVietNamPro';
        src: url(${BeVietNamPro}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${Inter}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
`;

export default GlobalStyle