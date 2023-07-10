import type { AppProps } from 'next/app'
import { createStandaloneToast, ChakraProvider, extendTheme } from '@chakra-ui/react'
import { persistor, store } from '@/store'
import { GlobalStyles } from '@/styles/globals'
import DarkModeProvider from '@/context/DarkMode'
import { Header, Footer } from '@/components';

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  const { ToastContainer } = createStandaloneToast()

  const colors = {
    green: {
      200: '#7fffc1',
      300: '#7fffc1',
      400: '#00ff84',
      500: '#00DD73',
      600: '#007f42',
      700: '#00DD73',
      800: '#00DD73',
    },
    blackAlpha: {
      300: '#FF0000',
      400: '#FF0000',
      500: '#FF0000',
      600: '#FF0000',
      700: '#FF0000',
      800: '#FF0000',
    },
    whiteAlpha: {
      300: '#EDEDED',
      400: '#EDEDED',
      500: '#EDEDED',
      600: '#EDEDED',
      700: '#EDEDED',
      800: '#EDEDED',
    },
  };
  
  const theme = extendTheme({ colors });

  return (
    <DarkModeProvider>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          {/* <PersistGate persistor={persistor}> */}
            <ToastContainer />
            <Header />
            <Component {...pageProps} />
            <Footer />
            <GlobalStyles />
          {/* </PersistGate> */}
        </Provider>
      </ChakraProvider>
    </DarkModeProvider>
  )
}
