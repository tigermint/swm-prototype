import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// 기본 여백 삭제, 폰트
export const GlobalStyles = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'GangwonEdu_OTFBoldA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'GangwonEduPowerExtraBoldA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEduPowerExtraBoldA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  :root {
    font-family: "GangwonEdu_OTFBoldA";
  }

  body {
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Nanum Pen Script', cursive;
  min-height: 100vh;
  margin: 0;
  }

  @media (min-width: 425px) {
    .App {
    width: 425px;
    }
  }

  @media (max-width: 425px) {
    .App {
      width: 90vw;
    }
  }

  #root {
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .App {
    min-height: 100vh;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
