import { createGlobalStyle } from 'styled-components';
// import KorolevEot from '../public/fonts/KorolevMilitaryStencil/7aa6f23718712abc71a57b079ebadb52.eot';
// import KorolevTtf from '../public/fonts/KorolevMilitaryStencil/7aa6f23718712abc71a57b079ebadb52.ttf';
// import KorolevWolf from '../public/fonts/KorolevMilitaryStencil/7aa6f23718712abc71a57b079ebadb52.woff';
// import KorolevWolf2 from '../public/fonts/KorolevMilitaryStencil/7aa6f23718712abc71a57b079ebadb52.woff2';
// import InkFreeTtf from '../public/fonts/InkFree/inkfree.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'KorolevMilitaryStencil';
    src: url('/fonts/KorolevMilitaryStencil/7aa6f23718712abc71a57b079ebadb52.ttf') format('truetype');
  }

  :root {
    --max-width: 1200px;

    /** Colors **/
    --light-gray: #B3B3B3;
    --absolute-white: #EDEDED;
    --absolute-black: #0A0A0A;
    --body-background: #EDEDED;

    /** Fonts **/
    --font-family: "Nunito", sans-serif;

    /** body-default **/
    --body-default-font-size: 16px;

    /** h1-normal **/
    --h1-normal-font-size: 2em;

    /** Spacements **/
    --spacement-small: 6px;
    --spacement-default: 10px;
    --spacement-large: 20px;
    --spacement-x-large: 28px;

    /** Borders **/
    --border-radius-small: 3px;
    --border-radius: 13px;
    --border-radius-large: 29px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: var(--body-default-font-size);
    font-family: var(--font-family);
    background: var(--body-background) !important;
  }

  .swiper-button-prev {
    color: var(--absolute-black) !important;
  }

  .swiper-button-next {
   color: var(--absolute-black) !important;
  }

  /* Scrollbar styles */

  ::-webkit-scrollbar {
    width:6px!important;
    height:6px!important;
    background-color: var(--absolute-white);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--absolute-black);
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: gray;
  }
  ::-webkit-scrollbar-track{
    background-color: transform
  }
`;
