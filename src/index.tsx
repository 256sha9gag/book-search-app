import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from 'styled-components'

import baseTheme from './styles/baseTheme'
import GlobalStyles from './styles/global'
import App from './App'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

reportWebVitals()
