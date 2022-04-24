import { Box, Flex } from '@chakra-ui/layout';

import Header from '../components/Header';
import SignupForm from '../components/SignupForm';
import SignupFormBanner from '../components/SignupFormBanner';

const Signup = () => {
  return (
    <Box w="100%" h="100vh" p={0}>
      <Box h="10%">
        <Header />
      </Box>
      <Flex h="90%" direction={{ base: 'column', md: 'row-reverse' }}>
        <Box flexBasis="50%">
          <SignupForm />
        </Box>
        <Box flexBasis="50%">
          <SignupFormBanner />
        </Box>
      </Flex>
    </Box>
  );
};

Signup.authForm = true;

export default Signup;
