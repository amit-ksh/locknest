import MainLayout from '../components/MainLayout';
import PaymentCardForm from '../components/PaymentCardForm';
import BankAccountForm from '../components/BankAccountForm';
import { FC } from 'react';

const itemsList = [
  {
    name: 'Credit/Debit Card',
    Form: PaymentCardForm,
  },
  {
    name: 'Bank Account',
    Form: BankAccountForm,
  },
];

const Payments: FC<{}> = () => {
  return <MainLayout itemsList={itemsList} />;
};

export default Payments;
