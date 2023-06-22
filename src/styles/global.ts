import { createGlobalStyle } from 'styled-components'
import MontserratRegularWoff2 from '../assets/fonts/Montserrat-Regular.woff2'
import MontserratRegularWoff from '../assets/fonts/Montserrat-Regular.woff'
import MontserratBoldWoff2 from '../assets/fonts/Montserrat-Bold.woff2'
import MontserratBoldrWoff from '../assets/fonts/Montserrat-Bold.woff'

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    @font-face {
        font-family: 'MontserratRegular';
        src: local('MontserratRegular'), local('MontserratRegular'),
        url(${MontserratRegularWoff2}) format('woff2'),
        url(${MontserratRegularWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'MontserratBold';
        src: local('MontserratBold'), local('MontserratBold'),
        url(${MontserratBoldWoff2}) format('woff2'),
        url(${MontserratBoldrWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

`
