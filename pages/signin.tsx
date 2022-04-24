import { Box, Flex } from '@chakra-ui/layout';

import Header from '../components/Header';
import SigninForm from '../components/SigninForm';
import SigninFormBanner from '../components/SigninFormBanner';

const Signin = () => {
  return (
    <Box w="100%" h="100vh" p={0}>
      <Box h="10%">
        <Header />
      </Box>
      <Flex h="90%" direction={{ base: 'column', md: 'row' }}>
        <Box flexBasis="50%">
          <SigninForm />
        </Box>
        <Box flexBasis="50%">
          <SigninFormBanner />
        </Box>
      </Flex>
    </Box>
  );
};

Signin.authForm = true;

export default Signin;
