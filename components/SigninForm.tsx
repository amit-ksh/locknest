import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Button,
  useToast,
} from '@chakra-ui/react';
import { Box, Link } from '@chakra-ui/layout';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import emailValidator from 'email-validator';

import InputBox from './InputBox';
import { auth } from '../lib/mutations';

const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const checkEmail = () => {
    if (emailValidator.validate(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    checkEmail();

    if (isEmailValid) return;

    setIsLoading(true);

    const { user, error } = await auth('signin', { email, password });

    setIsLoading(false);
    if (error || !user) {
      toast({
        position: 'top',
        title: error,
        description: 'Check your email and password.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    router.push('/');
  };

  useEffect(() => {
    return () => {
      setEmail('');
      setPassword('');
      setIsLoading(false);
      setIsEmailValid(true);
    };
  }, []);

  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading color="brand.500" size="2xl">
          Sign In
        </Heading>
        <Text color="gray.500">
          Don't have an account?{' '}
          <NextLink
            href={{
              pathname: '/signup',
            }}
            passHref
          >
            <Link color="brand.600">Sign Up</Link>
          </NextLink>
        </Text>
      </VStack>
      <Box w="80%" h="100%">
        <form onSubmit={handleSubmit}>
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={2}>
              <InputBox
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={email}
                isRequired={true}
                isInvalid={isEmailValid}
                onChange={(e) => setEmail(e.target.value)}
              />
            </GridItem>
            <GridItem colSpan={2}>
              <InputBox
                label="Master Password"
                type="password"
                placeholder="Enter your master password"
                value={password}
                isRequired={true}
                isInvalid={false}
                onChange={(e) => setPassword(e.target.value)}
              />
            </GridItem>
            <GridItem mt={4} colSpan={2}>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                w="full"
                isLoading={isLoading}
              >
                Sign In
              </Button>
            </GridItem>
          </SimpleGrid>
        </form>
      </Box>
    </VStack>
  );
};

export default SigninForm;
