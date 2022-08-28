import { Box, Flex } from '@chakra-ui/layout';

import Header from '../components/Header';
import SigninForm from '../components/SigninForm';
import SigninFormBanner from '../components/SigninFormBanner';

const Signin = () => {
  return (
    <>
      <Box>
        <Header />
      </Box>
      <Flex h='90vh' direction={{ base: 'column', md: 'row' }}>
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
