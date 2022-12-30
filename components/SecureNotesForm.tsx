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
import { SaveSecureNotesFormPropsTypes } from '../types/props';
import { StoreModel } from '../store/model';

const SecureNotesForm: FC<SaveSecureNotesFormPropsTypes> = ({
  isOpen,
  onClose,
  item = {},
}) => {
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  const toast = useToast();

  const saveItem = useStoreActions(
    (actions: Actions<StoreModel>) => actions.saveItem
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { id: item.id, name, notes };
    const actionName = item.id ? 'MODIFY_ITEM' : 'ADD_ITEM';
    onClose();

    try {
      const { id, error } = await itemCRUD('save', {
        data,
        type: 'secureNotes',
      });

      if (id) {
        saveItem({
          item: { ...data, id },
          actionName,
          itemName: 'secureNotes',
        });
        createToast(toast, 'Notes Saved.');
      } else {
        createToast(toast, 'Error!', error.cause, 'error');
      }
    } catch (e) {
      createToast(toast, 'Error!', 'Server Error', 'error');
      console.log(e.message);
    }

    reset([setName, setNotes]);
  };

  const handleClose = () => {
    reset([setName, setNotes]);
    onClose();
  };

  useEffect(() => {
    setName(item.name || name);
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
          Add a secure notes
        </DrawerHeader>

        <DrawerBody>
          <form id="add-notes-form" onSubmit={handleSubmit}>
            <Stack spacing={5}>
              <InputBox
                label="Name"
                type="text"
                placeholder="Enter a name"
                value={name}
                isRequired={true}
                onChange={(e) => setName(e.target.value)}
              />

              <NotesInputField
                value={notes}
                maxH="400px"
                onChange={(e) => setNotes(e.target.value)}
              />
            </Stack>
          </form>
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <Button variant="danger" mr={3} onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" form="add-notes-form">
            Submit
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SecureNotesForm;
