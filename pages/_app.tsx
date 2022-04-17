import { ChakraProvider } from '@chakra-ui/react';
import 'reset-css';
import theme from '../theme';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      {Component.authPage ? (
        <Component {...pageProps} />
      ) : (
        <Component {...pageProps} />
      )}
    </ChakraProvider>
  );
};

export default MyApp;
