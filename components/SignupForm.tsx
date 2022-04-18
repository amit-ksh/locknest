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
import { useState } from 'react';

import emailValidator from 'email-validator';
import PasswordValidator from 'password-validator';

import InputBox from './InputBox';
import { auth } from '../lib/mutations';

const passwordHelpers = [
  'At least 12 character long.',
  'At least 1 lowercase letter',
  'At least 1 uppercase letter',
  'At least 1 number',
  'At least 1 symbol',
];

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypedPassword, setRetypedPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isRetypedPasswordValid, setIsRetypedPasswordValid] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const checkEmail = () => {
    if (emailValidator.validate(email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const checkPassword = () => {
    const schema = new PasswordValidator();

    schema
      .is()
      .min(12) // Minimum length 8
      .is()
      .max(100) // Maximum length 100
      .has()
      .uppercase() // Must have uppercase letters
      .has()
      .lowercase() // Must have lowercase letters
      .has()
      .digits(1) // Must have at least 1 digits
      .has()
      .symbols(1)
      .has()
      .not()
      .spaces();

    if (schema.validate(password)) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  const checkRetypedPassword = () => {
    if (password === retypedPassword) {
      setIsRetypedPasswordValid(true);
    } else {
      setIsRetypedPasswordValid(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    checkPassword();
    checkRetypedPassword();
    checkEmail();

    if (!isEmailValid || !isPasswordValid || !isRetypedPasswordValid) return;

    setIsLoading(true);

    const { user, error } = await auth('signup', { email, password });

    setIsLoading(false);
    if (error || !user) {
      toast({
        position: 'top',
        title: error,
        description: (
          <Button
            color="brand.600"
            mt="0.25rem"
            onClick={() => {
              router.push('/signin');
              toast.closeAll();
            }}
          >
            Sign In
          </Button>
        ),
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(false);
    router.push('/');
  };

  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading color="brand.500" size="2xl">
          Sign Up
        </Heading>
        <Text color="gray.500">
          Alread have an account?{' '}
          <NextLink
            href={{
              pathname: '/signin',
            }}
            passHref
          >
            <Link color="brand.600">Sign In</Link>
          </NextLink>
        </Text>
      </VStack>
      <Box w="100%" h="100%">
        <form onSubmit={handleSubmit}>
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={2}>
              <InputBox
                label="Email"
                type="email"
                placeholder="Enter your email"
                isRequired={true}
                isInvalid={!isEmailValid}
                onChange={(e) => setEmail(e.target.value)}
              />
            </GridItem>
            <GridItem colSpan={2}>
              <InputBox
                label="Master Password"
                type="password"
                placeholder="Enter your master password"
                isRequired={true}
                isInvalid={!isPasswordValid}
                isPassword={true}
                helpers={passwordHelpers}
                onChange={(e) => setPassword(e.target.value)}
              />
            </GridItem>
            <GridItem colSpan={2}>
              <InputBox
                label="Retype Master Password"
                type="password"
                placeholder="Retype your master password"
                isRequired={true}
                isInvalid={!isRetypedPasswordValid}
                isPassword={true}
                onChange={(e) => setRetypedPassword(e.target.value)}
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
                Create Account
              </Button>
            </GridItem>
          </SimpleGrid>
        </form>
      </Box>
    </VStack>
  );
};

export default SignUpForm;
