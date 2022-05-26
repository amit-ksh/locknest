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
import { useEffect, useState } from 'react';

import InputBox from './InputBox';
import { auth } from '../lib/mutations';
import { createToast, checkEmail, validate } from '../lib/form';
import { useStoreActions, useStoreState } from 'easy-peasy';

const SigninForm = () => {
  const router = useRouter();
  const user = useStoreState((state: any) => state.user);
  const setUser = useStoreActions((actions: any) => actions.setUser);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailNotValid, setIsEmailNotValid] = useState(false);
  const toast = useToast();

  const onEmailChange = (e) => {
    setEmail(e.target.value);

    validate([email], checkEmail, setIsEmailNotValid);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    validate([email], checkEmail, setIsEmailNotValid);

    if (isEmailNotValid || !password) return;

    setIsLoading(true);
    const { user, error } = await auth('signin', {
      email,
      password,
    });

    setIsLoading(false);
    if (error || !user) {
      createToast(toast, error, 'Check your email and password.', 'error');
      return;
    }

    setUser({ user });
    router.push('/');
  };

  useEffect(() => {
    if (!user) return;
    router.push('/');
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
                isInvalid={isEmailNotValid}
                onChange={onEmailChange}
              />
            </GridItem>
            <GridItem colSpan={2}>
              <InputBox
                label="Master Password"
                type="password"
                placeholder="Enter your master password"
                value={password}
                isRequired={true}
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
