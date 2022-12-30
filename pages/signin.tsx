import { Box, Flex } from '@chakra-ui/layout';

import Header from '../components/Header';
import SigninForm from '../components/SigninForm';
import SigninFormBanner from '../components/SigninFormBanner';
import Head from 'next/head';

const Signin = () => {
  return (
    <>
      <Head>
        <title>Sign in | Locknest</title>
      </Head>
      <Box>
        <Header />
      </Box>
      <Flex h="90vh" direction={{ base: 'column', md: 'row' }}>
        <Box flexBasis="50%">
          <SigninForm />
        </Box>
        <Box flexBasis="50%">
          <SigninFormBanner />
        </Box>
      </Flex>
    </>
  );
};

Signin.authForm = true;

export default Signin;
