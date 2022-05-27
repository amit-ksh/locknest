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
import { SavePaymentCardFormPropsTypes } from '../lib/propsTypes';
import { Actions, useStoreActions } from 'easy-peasy';
import { StoreModel } from '../lib/model';

const PasswordForm: FC<SavePaymentCardFormPropsTypes> = ({
  isOpen,
  onClose,
  item = {},
}) => {
  const [name, setName] = useState('');
  const [holderName, setHolderName] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [CVV, setCVV] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [notes, setNotes] = useState('');
  const toast = useToast();

  const saveItem = useStoreActions(
    (actions: Actions<StoreModel>) => actions.saveItem
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      id: item.id,
      name,
      holderName,
      cardName,
      cardNumber,
      CVV,
      expirationDate,
      notes,
    };
    const actionName = item.id ? 'MODIFY_ITEM' : 'ADD_ITEM';
    onClose();

    try {
      const { id, error } = await itemCRUD('save', {
        data,
        type: 'paymentCard',
      });

      if (id) {
        saveItem({
          item: { ...data, id },
          actionName,
          itemName: 'paymentcard',
        });
        createToast(toast, 'Payment Card Saved.');
      } else {
        createToast(toast, 'Error!', error.cause, 'error');
      }
    } catch (e) {
      console.log(e.message);
    }

    reset([
      setName,
      setHolderName,
      setCardName,
      setCardNumber,
      setCVV,
      setExpirationDate,
      setNotes,
    ]);
  };

  const handleClose = () => {
    reset([
      setName,
      setHolderName,
      setCardName,
      setCardNumber,
      setCVV,
      setExpirationDate,
      setNotes,
    ]);
    onClose();
  };

  useEffect(() => {
    setName(item.name || name);
    setHolderName(item.holderName || holderName);
    setCardName(item.cardName || cardName);
    setCardNumber(item.cardNumber || cardNumber);
    setCVV(item.CVV || CVV);
    setExpirationDate(item.expirationDate || expirationDate);
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
          Add a Payment Card
        </DrawerHeader>

        <DrawerBody>
          <form id="add-payment-card-form" onSubmit={handleSubmit}>
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
                label="Cardholder Name"
                type="text"
                placeholder="Enter cardholder name"
                value={holderName}
                onChange={(e) => setHolderName(e.target.value)}
              />

              <InputBox
                label="Card Name"
                type="text"
                placeholder="Enter card name"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />

              <InputBox
                label="Card Number"
                type="text"
                placeholder="Enter card number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />

              <InputBox
                label="CVV"
                type="text"
                placeholder="Enter CVV"
                value={CVV}
                onChange={(e) => setCVV(e.target.value)}
              />

              <InputBox
                label="Expiration Date"
                type="date"
                placeholder="Select Expiration Date"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
              />

              <NotesInputField
                value={notes}
                maxH="130px"
                onChange={(e) => setNotes(e.target.value)}
              />
            </Stack>
          </form>
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <Button variant="danger" mr={3} onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" form="add-payment-card-form">
            Submit
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default PasswordForm;
