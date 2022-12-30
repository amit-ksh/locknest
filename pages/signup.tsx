import { Box, Flex } from '@chakra-ui/layout';

import Header from '../components/Header';
import SignupForm from '../components/SignupForm';
import SignupFormBanner from '../components/SignupFormBanner';
import Head from 'next/head';

const Signup = () => {
  return (
    <>
      <Head>
        <title>Signin | Locknest</title>
      </Head>
      <Box>
        <Header />
      </Box>
      <Flex h="100vh" direction={{ base: 'column', md: 'row-reverse' }}>
        <Box flexBasis="50%">
          <SignupForm />
        </Box>
        <Box flexBasis="50%">
          <SignupFormBanner />
        </Box>
      </Flex>
    </>
  );
};

Signup.authForm = true;

export default Signup;
