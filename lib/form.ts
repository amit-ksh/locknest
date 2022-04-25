import { useToast } from '@chakra-ui/react';
import emailValidator from 'email-validator';
import PasswordValidator from 'password-validator';

export const createToast = (
  toast,
  title: string,
  description: string = '',
  status: 'success' | 'info' | 'warning' | 'error' = 'success'
) => {
  toast({
    title,
    status,
    description,
    duration: 5000,
    isClosable: true,
    position: 'top',
  });
};

export const reset = (callbacks) => {
  callbacks.forEach((fn) => {
    fn('');
  });
};

export const checkEmail = (email) => emailValidator.validate(email);

export const checkPassword = (password) => {
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
    .symbols(1) // Must have at least 1 symbol
    .has()
    .not()
    .spaces(); // Must not have any spaces in the password

  return schema.validate(password);
};

export const checkRetypedPassword = (password, retypedPassword) =>
  password === retypedPassword;

export const validate = (payload, validateState, setValidState) => {
  if (validateState(...payload)) {
    setValidState(false);
  } else {
    setValidState(true);
  }
};
