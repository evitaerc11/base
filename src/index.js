import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { CookiesProvider } from 'react-cookie'
// Custom Chakra theme
import theme from 'theme/theme.js'
import Router from 'routers.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

ReactDOM.render(
  <ChakraProvider theme={theme} resetCss={false} position='relative'>
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </CookiesProvider>
  </ChakraProvider>,
  document.getElementById('root')
)
