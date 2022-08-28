import { Box, Flex } from '@chakra-ui/layout';

import Header from '../components/Header';
import SignupForm from '../components/SignupForm';
import SignupFormBanner from '../components/SignupFormBanner';

const Signup = () => {
  return (
    <>
      <Box>
        <Header />
      </Box>
      <Flex h='90vh' direction={{ base: 'column', md: 'row-reverse' }}>
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
