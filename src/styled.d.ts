import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string
      secondary: string
      ligth: string
      dark: string
    }
    background: {
      image: any
    }
  }
}
