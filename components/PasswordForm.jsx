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
import NotesInputField from './NotesInputField';

import { auth } from '../lib/mutations';

const PasswordForm = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [notes, setNotes] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    onClose();
    const { success } = await auth('saveitem', {
      data: { name, url, username, password, notes },
      type: 'password',
    });

    if (success) {
      toast({
        title: 'Password Saved.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Error!',
        description: 'Password Not Saved.',
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
          Add a password
        </DrawerHeader>

        <DrawerBody>
          <form id="add-password-form" onSubmit={handleSubmit}>
            <Stack spacing={5}>
              <InputBox
                label="Name"
                type="text"
                placeholder="Enter a name"
                isRequired={true}
                onChange={(e) => setName(e.target.value)}
              />

              <InputBox
                label="URL"
                type="url"
                placeholder="Enter domain name"
                onChange={(e) => setUrl(e.target.value)}
              />

              <InputBox
                label="Username"
                type="text"
                placeholder="Enter username or email id"
                onChange={(e) => setUsername(e.target.value)}
              />

              <InputBox
                label="Password"
                type="password"
                placeholder="Enter password"
                isPassword={true}
                onChange={(e) => setPassword(e.target.value)}
              />

              <NotesInputField
                maxH="130px"
                onChange={(e) => setNotes(e.target.value)}
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

export default PasswordForm;
