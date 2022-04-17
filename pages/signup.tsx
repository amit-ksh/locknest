import { Box, Flex } from '@chakra-ui/layout';

import SignupForm from '../components/SignupForm';
import SignupFormBanner from '../components/SignupFormBanner';

const Signup = () => {
  return (
    <Box width="100%" h="100vh" maxW="container.xl" p={0}>
      <Flex h="100%" direction={{ base: 'column', md: 'row-reverse' }}>
        <Box flexBasis="55%">
          <SignupForm />
        </Box>
        <Box flexBasis="45%">
          <SignupFormBanner />
        </Box>
      </Flex>
    </Box>
  );
};

Signup.authForm = true;

export default Signup;
