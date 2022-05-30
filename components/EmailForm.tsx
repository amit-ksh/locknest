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

import { itemCRUD } from '../lib/mutations';
import { createToast, reset } from '../lib/form';
import { Actions, useStoreActions } from 'easy-peasy';
import { StoreModel } from '../lib/model';
import { SaveEmailFormPropsTypes } from '../lib/propsTypes';

const EmailForm: FC<SaveEmailFormPropsTypes> = ({
  isOpen,
  onClose,
  item = {},
}) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const saveItem = useStoreActions(
    (actions: Actions<StoreModel>) => actions.saveItem
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { id: item.id, name, username, password };
    const actionName = item.id ? 'MODIFY_ITEM' : 'ADD_ITEM';
    onClose();

    try {
      const { id, error } = await itemCRUD('save', {
        data,
        type: 'email',
      });

      if (id) {
        saveItem({
          item: { ...data },
          actionName,
          itemName: 'email',
        });
        createToast(toast, 'Email Saved.');
      } else {
        createToast(toast, 'Error!', error.cause, 'error');
      }
    } catch (e) {
      createToast(toast, 'Error!', 'Server Error', 'error');
      console.log(e.message);
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
