import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Button,
  useToast,
  useColorMode,
} from '@chakra-ui/react';
import { Box, Link } from '@chakra-ui/layout';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

import InputBox from './InputBox';
import { auth } from '../lib/mutations';
import {
  checkEmail,
  checkPassword,
  checkRetypedPassword,
  validate,
} from '../lib/form';
import { State, useStoreState } from 'easy-peasy';
import { StateModel } from '../store/model';

const passwordHelpers = [
  'At least 12 characters long.',
  'At least 1 lowercase letter.',
  'At least 1 uppercase letter.',
  'At least 1 number.',
  'At least 1 symbol.',
];

const SignUpForm: FC<{}> = () => {
  const router = useRouter();
  const user = useStoreState((state: State<StateModel>) => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypedPassword, setRetypedPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isRetypedPasswordValid, setIsRetypedPasswordValid] = useState(true);
  const toast = useToast();
  const { colorMode } = useColorMode();

  const onEmailChange = (e) => {
    setEmail(e.target.value);

    validate([email], checkEmail, setIsEmailValid);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);

    validate([password], checkPassword, setIsPasswordValid);
  };

  const onRetypedPasswordChange = (e) => {
    setRetypedPassword(e.target.value);

    validate(
      [password, e.target.value],
      checkRetypedPassword,
      setIsRetypedPasswordValid
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    validate([email], checkEmail, setIsEmailValid);
    validate([password], checkPassword, setIsPasswordValid);
    validate(
      [password, retypedPassword],
      checkRetypedPassword,
      setIsRetypedPasswordValid
    );

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
            as="a"
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
          Sign Up
        </Heading>
        <Text color={colorMode === 'light' ? 'gray.500' : 'gray.100'}>
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
                value={email}
                isRequired={true}
                isInvalid={!isEmailValid}
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
                isInvalid={!isPasswordValid}
                helpers={passwordHelpers}
                onChange={onPasswordChange}
              />
            </GridItem>
            <GridItem colSpan={2}>
              <InputBox
                label="Retype Master Password"
                type="password"
                placeholder="Retype your master password"
                value={retypedPassword}
                isRequired={true}
                isInvalid={!isRetypedPasswordValid}
                onChange={onRetypedPasswordChange}
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
