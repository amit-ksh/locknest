import { Box, Flex } from '@chakra-ui/layout';

import SigninForm from '../components/SigninForm';
import SigninFormBanner from '../components/SigninFormBanner';

const Signin = () => {
  return (
    <Box w="100%" h="100vh" p={0}>
      <Flex w="100%" h="100%" direction={{ base: 'column', md: 'row' }}>
        <Box flexBasis="55%">
          <SigninForm />
        </Box>
        <Box flexBasis="45%">
          <SigninFormBanner />
        </Box>
      </Flex>
    </Box>
  );
};

Signin.authForm = true;

export default Signin;
