import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.dark};
  }
`
