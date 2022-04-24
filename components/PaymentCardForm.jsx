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
import NotesInputField from './NotesInputField';
import DateField from './DateField';

import { auth } from '../lib/mutations';
import { createToast, reset } from '../lib/form';

const PasswordForm = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [holderName, setHolderName] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [CVV, setCVV] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('0');
  const [expirationYear, setExpirationYear] = useState('0');
  const [notes, setNotes] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    onClose();
    const { success } = await auth('saveitem', {
      data: {
        name,
        holderName,
        cardName,
        cardNumber,
        CVV,
        expirationMonth,
        expirationYear,
        notes,
      },
      type: 'paymentCard',
    });

    if (success) {
      createToast(toast, 'Payment Card Saved.');
    } else {
      createToast(toast, 'Error!', 'Payment Card Details Not Saved', 'error');
    }

    reset([
      setName,
      setHolderName,
      setCardName,
      setCardNumber,
      setCVV,
      setExpirationMonth,
      setExpirationYear,
      setNotes,
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

              <DateField
                label="Expiration Date"
                handleMonthChange={(e) => setExpirationMonth(e.target.value)}
                handleYearChange={(e) => setExpirationYear(e.target.value)}
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
          <Button variant="danger" mr={3} onClick={onClose}>
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
