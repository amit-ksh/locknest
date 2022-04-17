import { Heading, VStack, Image, AspectRatio, Divider } from '@chakra-ui/react';
import WelcomeIcon from '../public/welcome.svg';

const SignupFormBanner = () => {
  return (
    <VStack
      color="white"
      w="full"
      h="full"
      p={10}
      spacing={12}
      align="flex-start"
      bg="brand.500"
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="xl">LockNest</Heading>
        <Divider />
      </VStack>

      <VStack spacing={10} alignItems="stretch" w="full">
        <Heading size="2xl">Welcome to LockNest</Heading>
        <AspectRatio ratio={21 / 10} w="100%">
          <Image
            src={WelcomeIcon.src}
            alt="Welcome To LockNest"
            aria-label="hidden"
          />
        </AspectRatio>
        <Heading as="p" size="md">
          Access your passwords and personal data in a single place — quickly
          and securely.
        </Heading>
      </VStack>
    </VStack>
  );
};

export default SignupFormBanner;
