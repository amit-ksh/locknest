import { ChakraProvider } from '@chakra-ui/react';
import 'reset-css';
import theme from '../theme';
import { store } from '../lib/store';
import { StoreProvider } from 'easy-peasy';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
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
