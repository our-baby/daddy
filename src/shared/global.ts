import { createGlobalStyle } from 'styled-components';

import PretendardWoff2Black from '@/assets/fonts/woff2/Pretendard-Black.woff2';
import PretendardWoff2ExtraBold from '@/assets/fonts/woff2/Pretendard-ExtraBold.woff2';
import PretendardWoff2Bold from '@/assets/fonts/woff2/Pretendard-Bold.woff2';
import PretendardWoff2SemiBold from '@/assets/fonts/woff2/Pretendard-SemiBold.woff2';
import PretendardWoff2Medium from '@/assets/fonts/woff2/Pretendard-Medium.woff2';
import PretendardWoff2Regular from '@/assets/fonts/woff2/Pretendard-Regular.woff2';
import PretendardWoff2Light from '@/assets/fonts/woff2/Pretendard-Light.woff2';
import PretendardWoff2ExtraLight from '@/assets/fonts/woff2/Pretendard-ExtraLight.woff2';
import PretendardWoff2Thin from '@/assets/fonts/woff2/Pretendard-Thin.woff2';

import PretendardWoffBlack from '@/assets/fonts/woff/Pretendard-Black.woff';
import PretendardWoffExtraBold from '@/assets/fonts/woff/Pretendard-ExtraBold.woff';
import PretendardWoffBold from '@/assets/fonts/woff/Pretendard-Bold.woff';
import PretendardWoffSemiBold from '@/assets/fonts/woff/Pretendard-SemiBold.woff';
import PretendardWoffMedium from '@/assets/fonts/woff/Pretendard-Medium.woff';
import PretendardWoffRegular from '@/assets/fonts/woff/Pretendard-Regular.woff';
import PretendardWoffLight from '@/assets/fonts/woff/Pretendard-Light.woff';
import PretendardWoffExtraLight from '@/assets/fonts/woff/Pretendard-ExtraLight.woff';
import PretendardWoffThin from '@/assets/fonts/woff/Pretendard-Thin.woff';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard';
        font-weight: 100;
        font-style: normal;
        src: url(${PretendardWoff2Thin}) format('woff2'),
            url(${PretendardWoffThin}) format('woff');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 200;
        font-style: normal;
        src: url(${PretendardWoff2ExtraLight}) format('woff2'),
            url(${PretendardWoffExtraLight}) format('woff');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 300;
        font-style: normal;
        src: url(${PretendardWoff2Light}) format('woff2'),
            url(${PretendardWoffLight}) format('woff');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 400;
        font-style: normal;
        src: url(${PretendardWoff2Regular}) format('woff2'),
            url(${PretendardWoffRegular}) format('woff');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 500;
        font-style: normal;
        src: url(${PretendardWoff2Medium}) format('woff2'),
            url(${PretendardWoffMedium}) format('woff');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 600;
        font-style: normal;
        src: url(${PretendardWoff2SemiBold}) format('woff2'),
            url(${PretendardWoffSemiBold}) format('woff');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 700;
        font-style: normal;
        src: url(${PretendardWoff2Bold}) format('woff2'),
            url(${PretendardWoffBold}) format('woff');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 800;
        font-style: normal;
        src: url(${PretendardWoff2ExtraBold}) format('woff2'),
            url(${PretendardWoffExtraBold}) format('woff');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 900;
        font-style: normal;
        src: url(${PretendardWoff2Black}) format('woff2'),
            url(${PretendardWoffBlack}) format('woff');
    }

    #root { font-family: 'Pretendard'; }

    *{margin:0;padding:0;font:inherit;color:inherit;}
    *, :after, :before {box-sizing:border-box;}
    :root {-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;text-size-adjust:100%;cursor:default;line-height:1.5;overflow-wrap:break-word;-moz-tab-size:4;tab-size:4}
    html, body {height:100%;}
    img, picture, video, canvas, svg {display: block;max-width:100%;}
    button {background:none;border:0;cursor:pointer;}
    a {text-decoration:none}
    table {border-collapse:collapse;border-spacing:0}
    ul, ol { list-style: none; }
`;
