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
import { useEffect, useState } from 'react';

import InputBox from './InputBox';

import { auth } from '../lib/mutations';
import { createToast, reset } from '../lib/form';

const EmailForm = ({ isOpen, onClose, item = {} }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    onClose();
    const { success } = await auth('saveitem', {
      data: { id: item.id, name, username, password },
      type: 'email',
    });

    if (success) {
      createToast(toast, 'Email Saved.');
    } else {
      createToast(toast, 'Error!', 'Email Not Saved', 'error');
    }

    reset([setName, setUsername, setPassword]);
  };

  const handleClose = () => {
    reset([setName, setUsername, setPassword]);
    onClose();
  };

  useEffect(() => {
    if (!item) return;

    setName(item.name || name);
    setUsername(item.username || username);
    setPassword(item.password || password);
  }, [item]);

  return (
    <Drawer isOpen={isOpen} placement="right" size="md" onClose={handleClose}>
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
          <form id="add-email-form" onSubmit={handleSubmit}>
            <Stack spacing={5}>
              <InputBox
                label="Name"
                type="text"
                placeholder="Enter name"
                value={name}
                isRequired={true}
                onChange={(e) => setName(e.target.value)}
              />

              <InputBox
                label="Email"
                type="email"
                placeholder="Enter email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <InputBox
                label="Password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Stack>
          </form>
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <Button variant="danger" mr={3} onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" form="add-email-form">
            Submit
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default EmailForm;
