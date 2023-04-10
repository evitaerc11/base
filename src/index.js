import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { CookiesProvider } from 'react-cookie'
// Custom Chakra theme
import theme from 'theme/theme.js'
import Router from 'routers.js'

ReactDOM.render(
  <ChakraProvider theme={theme} resetCss={false} position='relative'>
    <CookiesProvider>
      <Router />
    </CookiesProvider>
  </ChakraProvider>,
  document.getElementById('root')
)
