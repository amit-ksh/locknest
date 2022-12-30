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
import { FC, useEffect, useState } from 'react';

import InputBox from './InputBox';
import NotesInputField from './NotesInputField';

import { itemCRUD } from '../lib/mutations';
import { createToast, reset } from '../lib/form';
import { Actions, useStoreActions } from 'easy-peasy';
import { StoreModel } from '../store/model';
import { SavePasswordFormPropsTypes } from '../types/props';

const PasswordForm: FC<SavePasswordFormPropsTypes> = ({
  isOpen,
  onClose,
  item = {},
}) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [notes, setNotes] = useState('');
  const toast = useToast();

  const saveItem = useStoreActions(
    (actions: Actions<StoreModel>) => actions.saveItem
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    onClose();
    const data = { id: item.id, name, url, username, password, notes };
    const actionName = item.id ? 'MODIFY_ITEM' : 'ADD_ITEM';

    console.info('AN', actionName, item.id);

    try {
      const { id } = await itemCRUD('save', { data, type: 'password' });

      console.log(id);
      if (id) {
        saveItem({ item: { ...data, id }, actionName, itemName: 'password' });
        createToast(toast, 'Password Saved.');
      } else {
        createToast(toast, 'Error!', 'Password Not Saved', 'error');
      }
    } catch (e) {
      createToast(toast, 'Error!', 'Server Error', 'error');
      console.log(e.message);
    }

    reset([setName, setUrl, setUsername, setPassword, setNotes]);
  };

  const handleClose = () => {
    reset([setName, setUrl, setUsername, setPassword, setNotes]);
    onClose();
  };

  useEffect(() => {
    setName(item.name || name);
    setUrl(item.url || url);
    setUsername(item.username || username);
    setPassword(item.password || password);
    setNotes(item.notes || notes);
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
          Add a password
        </DrawerHeader>

        <DrawerBody>
          <form id="add-password-form" onSubmit={handleSubmit}>
            <Stack spacing={5}>
              <InputBox
                label="Name"
                type="text"
                placeholder="Enter a name"
                value={name}
                isRequired={true}
                onChange={(e) => setName(e.target.value)}
              />

              <InputBox
                label="URL"
                type="url"
                placeholder="Enter domain name"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />

              <InputBox
                label="Username"
                type="text"
                placeholder="Enter username or email id"
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

              <NotesInputField
                maxH="130px"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </Stack>
          </form>
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <Button variant="danger" mr={3} onClick={handleClose}>
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
