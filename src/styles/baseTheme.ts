import { type DefaultTheme } from 'styled-components'
import headerBG from '../assets/headerBG.jpeg'

const baseTheme: DefaultTheme = {
  colors: {
    main: 'skyblue',
    secondary: 'gray',
    ligth: 'white',
    dark: 'gray',
    black: 'black'
  },
  background: {
    image: headerBG
  }
}

export default baseTheme
