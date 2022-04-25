import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
import { Stack } from '@chakra-ui/layout';
import { useState } from 'react';

import InputBox from './InputBox';

import { auth } from '../lib/mutations';
import { createToast, reset } from '../lib/form';

const IDCardForm = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [number, setNumber] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [country, setCountry] = useState('');
  const [placeOfIssue, setPlaceOfIssue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    onClose();
    const { success } = await auth('saveitem', {
      data: {
        name,
        type,
        number,
        issueDate,
        expirationDate,
        country,
        placeOfIssue,
      },
      type: 'idCard',
    });

    if (success) {
      createToast('ID Card Saved.');
    } else {
      createToast('Error!', 'ID Card Not Saved', 'error');
    }

    reset([
      setName,
      setType,
      setNumber,
      setIssueDate,
      setExpirationDate,
      setCountry,
      setPlaceOfIssue,
    ]);
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
          <form id="add-id-card-form" onSubmit={handleSubmit}>
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
                label="Type"
                type="text"
                placeholder="Enter type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />

              <InputBox
                label="Number"
                type="text"
                placeholder="Enter number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />

              <InputBox
                label="Issue Date"
                type="date"
                placeholder="Select Issue Date"
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
              />

              <InputBox
                label="Expiration Date"
                type="date"
                placeholder="Select Expiration Date"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
              />

              <InputBox
                label="Country"
                type="text"
                placeholder="Enter country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />

              <InputBox
                label="Place of issue"
                type="text"
                placeholder="Enter place of issue"
                value={placeOfIssue}
                onChange={(e) => setPlaceOfIssue(e.target.value)}
              />
            </Stack>
          </form>
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <Button variant="danger" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" form="add-id-card-form">
            Submit
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default IDCardForm;
