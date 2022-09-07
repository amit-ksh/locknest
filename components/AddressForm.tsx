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
import { StoreModel } from '../store/model';

import { SaveAddressFormPropsTypes } from '../types/props';

const AddressForm: FC<SaveAddressFormPropsTypes> = ({
  isOpen,
  onClose,
  item = {},
}) => {
  const [name, setName] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [addressLine3, setAddressLine3] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [country, setCountry] = useState('');
  const toast = useToast();

  const saveItem = useStoreActions(
    (actions: Actions<StoreModel>) => actions.saveItem
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      id: item.id,
      name,
      addressLine1,
      addressLine2,
      addressLine3,
      city,
      state,
      pinCode,
      country,
    };
    const actionName = item.id ? 'MODIFY_ITEM' : 'ADD_ITEM';
    onClose();

    try {
      const { id, error } = await itemCRUD('save', {
        data,
        type: 'address',
      });

      if (id) {
        saveItem({
          item: { ...data },
          actionName,
          itemName: 'address',
        });
        createToast(toast, 'Address Saved.');
      } else {
        createToast(toast, 'Error!', error.cause, 'error');
      }
    } catch (e) {
      createToast(toast, 'Error!', 'Server Error', 'error');
      console.log(e.message);
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
