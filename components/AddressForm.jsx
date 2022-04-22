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

const AddressForm = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [addressLine3, setAddressLine3] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [country, setCountry] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    onClose();
    const { success, error } = await auth('savepassword', {
      name,
      addressLine1,
      addressLine2,
      addressLine3,
      city,
      state,
      pinCode,
      country,
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
          Add a address
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
                label="Address Line 1"
                type="text"
                placeholder="Enter address line 1"
                onChange={(e) => setAddressLine1(e.target.value)}
              />

              <InputBox
                label="Address Line 1"
                type="text"
                placeholder="Enter address line 3"
                onChange={(e) => setAddressLine2(e.target.value)}
              />

              <InputBox
                label="Address Line 1"
                type="text"
                placeholder="Enter address line 3"
                onChange={(e) => setAddressLine3(e.target.value)}
              />

              <InputBox
                label="City"
                type="text"
                placeholder="Enter city"
                onChange={(e) => setCity(e.target.value)}
              />

              <InputBox
                label="State"
                type="text"
                placeholder="Enter state"
                onChange={(e) => setState(e.target.value)}
              />

              <InputBox
                label="PIN Code"
                type="number"
                placeholder="Enter PIN Code"
                onChange={(e) => setPinCode(e.target.value)}
              />

              <InputBox
                label="Country"
                type="text"
                placeholder="Enter country"
                onChange={(e) => setCountry(e.target.value)}
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

export default AddressForm;
