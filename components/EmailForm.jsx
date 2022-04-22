import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useToast,
} from '@chakra-ui/react';
import { Stack } from '@chakra-ui/layout';
import { useState } from 'react';

import InputBox from './InputBox';

import { auth } from '../lib/mutations';

const EmailForm = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    onClose();
    const { success, error } = await auth('savepassword', {
      name,
      username,
      password,
    });

    if (success) {
      toast({
        title: 'Bank Account Saved.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Error!',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Drawer isOpen={isOpen} placement="right" size="md" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          p={8}
          borderBottomWidth="1px"
          fontSize="4xl"
          bg="brand.500"
          color="white"
        >
          Add a email
        </DrawerHeader>

        <DrawerBody>
          <form id="add-password-form" onSubmit={handleSubmit}>
            <Stack spacing={5}>
              <InputBox
                label="Name"
                type="text"
                placeholder="Enter name"
                isRequired={true}
                onChange={(e) => setName(e.target.value)}
              />

              <InputBox
                label="Username"
                type="text"
                placeholder="Enter username"
                onChange={(e) => setUsername(e.target.value)}
              />

              <InputBox
                label="Password"
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Stack>
          </form>
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <Button variant="danger" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" form="add-password-form">
            Submit
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default EmailForm;
