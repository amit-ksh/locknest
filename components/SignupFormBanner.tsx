import {
  Heading,
  VStack,
  Image,
  AspectRatio,
  Text,
  Divider,
} from '@chakra-ui/react';
import WelcomeIcon from '../public/welcome.svg';

const SignupFormBanner = () => {
  return (
    <VStack
      color="white"
      w="full"
      h="full"
      p={10}
      spacing={20}
      align="flex-start"
      bg="brand.500"
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="xl">LockNest</Heading>
        <Divider />
      </VStack>

      <AspectRatio ratio={21 / 10} w="100%">
        <Image
          src={WelcomeIcon.src}
          alt="Welcome To LockNest"
          aria-label="hidden"
        />
      </AspectRatio>

      <VStack spacing={4} alignItems="stretch" w="full">
        <Heading size="2xl">Welcome to LockNest</Heading>
        <Text size="md">
          Access your passwords and personal data in a single place — quickly
          and securely.
        </Text>
      </VStack>
    </VStack>
  );
};

export default SignupFormBanner;
