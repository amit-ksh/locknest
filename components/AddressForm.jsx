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

const AddressForm = ({ isOpen, onClose, item = {} }) => {
  const [name, setName] = useState('');
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
    const { success } = await auth('saveitem', {
      data: {
        id: item.id,
        name,
        addressLine1,
        addressLine2,
        addressLine3,
        city,
        state,
        pinCode,
        country,
      },
      type: 'address',
    });
    if (success) {
      createToast(toast, 'Address Saved.');
    } else {
      createToast(toast, 'Error!', 'Address Not Saved', 'error');
    }

    reset([
      setName,
      setAddressLine1,
      setAddressLine2,
      setAddressLine3,
      setCity,
      setState,
      setPinCode,
      setCountry,
    ]);
  };

  const handleClose = () => {
    reset([
      setName,
      setAddressLine1,
      setAddressLine2,
      setAddressLine3,
      setCity,
      setState,
      setPinCode,
      setCountry,
    ]);
    onClose();
  };

  useEffect(() => {
    setName(item.name || name);
    setAddressLine1(item.addressLine1 || addressLine1);
    setAddressLine2(item.addressLine2 || addressLine2);
    setAddressLine3(item.addressLine3 || addressLine3);
    setCity(item.city || city);
    setState(item.state || state);
    setPinCode(item.pinCode || pinCode);
    setCountry(item.country || country);
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
          Add a address
        </DrawerHeader>

        <DrawerBody>
          <form id="add-address-form" onSubmit={handleSubmit}>
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
                label="Address Line 1"
                type="text"
                placeholder="Enter address line 1"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
              />

              <InputBox
                label="Address Line 2"
                type="text"
                placeholder="Enter address line 2"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
              />

              <InputBox
                label="Address Line 3"
                type="text"
                placeholder="Enter address line 3"
                value={addressLine3}
                onChange={(e) => setAddressLine3(e.target.value)}
              />

              <InputBox
                label="City"
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />

              <InputBox
                label="State"
                type="text"
                placeholder="Enter state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />

              <InputBox
                label="PIN Code"
                type="text"
                placeholder="Enter PIN Code"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />

              <InputBox
                label="Country"
                type="text"
                placeholder="Enter country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </Stack>
          </form>
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <Button variant="danger" mr={3} onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" form="add-address-form">
            Submit
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AddressForm;
