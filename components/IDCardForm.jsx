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
import DateField from './DateField';

import { auth } from '../lib/mutations';

const IDCardForm = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [number, setNumber] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [country, setCountry] = useState('');
  const [palceOfIssue, setPalceOfIssue] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    onClose();
    const { success, error } = await auth('savepassword', {
      name,
      type,
      number,
      issueDate,
      expirationDate,
      country,
      palceOfIssue,
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
          Add a ID card
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
                label="Type"
                type="text"
                placeholder="Enter type"
                onChange={(e) => setType(e.target.value)}
              />

              <InputBox
                label="Number"
                type="number"
                placeholder="Enter number"
                onChange={(e) => setNumber(e.target.value)}
              />

              <DateField
                label="Issue Date"
                onChange={(e) => setIssueDate(e.target.value)}
              />
              <DateField
                label="Expiration Date"
                onChange={(e) => setIssueDate(e.target.value)}
              />

              <InputBox
                label="Country"
                type="text"
                placeholder="Enter country"
                onChange={(e) => setCountry(e.target.value)}
              />

              <InputBox
                label="Place of issue"
                type="text"
                placeholder="Enter place of issure"
                onChange={(e) => setPalceOfIssue(e.target.value)}
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

export default IDCardForm;
