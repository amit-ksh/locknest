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
import NotesInputField from './NotesInputField';

import { auth } from '../lib/mutations';
import { createToast, reset } from '../lib/form';

const SecureNotesForm = ({ isOpen, onClose, item = {} }) => {
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    onClose();
    const { success } = await auth('saveitem', {
      data: { id: item.id, name, notes },
      type: 'secureNote',
    });

    if (success) {
      createToast(toast, 'Notes Saved.');
    } else {
      createToast(toast, 'Error!', 'Notes Not Saved', 'error');
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
