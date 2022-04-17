import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Button,
} from '@chakra-ui/react';
import { Box, Link } from '@chakra-ui/layout';
import NextLink from 'next/link';

import { useRouter } from 'next/router';
import { useState } from 'react';

import InputBox from './InputBox';

import { auth } from '../lib/mutations';

const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log(email, password);
    const user = await auth('signin', { email, password });

    setIsLoading(false);
    router.push('/');
  };

  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading color="brand.500" size="2xl">
          Sign In
        </Heading>
        <Text>
          Don't have an account?{' '}
          <Link color="brand.600">
            <NextLink
              href={{
                pathname: '/signup',
              }}
              passHref
            >
              Sign Up
            </NextLink>
          </Link>
        </Text>
      </VStack>
      <Box w="100%" h="100%">
        <form onSubmit={handleSubmit}>
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={2}>
              <InputBox
                label="Email"
                type="email"
                placeholder="someone@mail.com"
                isRequired={true}
                onChange={(e) => setEmail(e.target.value)}
              />
            </GridItem>
            <GridItem colSpan={2}>
              <InputBox
                label="Master Password"
                type="password"
                placeholder="Enter your master password"
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
