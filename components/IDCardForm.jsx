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
  const [issueMonth, setIssueMonth] = useState('0');
  const [issueYear, setIssueYear] = useState('0');
  const [expirationMonth, setExpirationMonth] = useState('0');
  const [expirationYear, setExpirationYear] = useState('0');
  const [country, setCountry] = useState('');
  const [placeOfIssue, setPlaceOfIssue] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    onClose();
    const { success } = await auth('saveitem', {
      data: {
        name,
        type,
        number,
        issueMonth,
        issueYear,
        expirationMonth,
        expirationYear,
        country,
        placeOfIssue,
      },
      type: 'idCard',
    });

    if (success) {
      toast({
        title: 'ID Card Saved.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Error!',
        description: 'ID Card Not Saved.',
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
                type="text"
                placeholder="Enter number"
                onChange={(e) => setNumber(e.target.value)}
              />

              <DateField
                label="Issue Date"
                handleMonthChange={(e) => setIssueMonth(e.target.value)}
                handleYearChange={(e) => setIssueYear(e.target.value)}
              />

              <DateField
                label="Expiration Date"
                handleMonthChange={(e) => setExpirationMonth(e.target.value)}
                handleYearChange={(e) => setExpirationYear(e.target.value)}
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
                placeholder="Enter place of issue"
                onChange={(e) => setPlaceOfIssue(e.target.value)}
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
