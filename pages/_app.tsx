import 'reset-css';
import '../styles/globals.css'
import { store } from '../lib/store';
import { StoreProvider } from 'easy-peasy';
import { ChakraProvider, localStorageManager } from '@chakra-ui/react';
import theme from '../theme';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
      <StoreProvider store={store}>
        {Component.authPage ? (
          <Component {...pageProps} />
        ) : (
          <Component {...pageProps} />
        )}
      </StoreProvider>
    </ChakraProvider>
  );
};

export default MyApp;
