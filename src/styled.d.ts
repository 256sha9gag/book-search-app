import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string
      secondary: string
      ligth: string
      dark: string
      black: string
    }
    background: {
      image: any
    }
  }
}
