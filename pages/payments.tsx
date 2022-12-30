import MainLayout from '../components/MainLayout';
import PaymentCardForm from '../components/PaymentCardForm';
import BankAccountForm from '../components/BankAccountForm';
import { FC } from 'react';
import Head from 'next/head';

const itemsList = [
  {
    name: 'Payment Card',
    Form: PaymentCardForm,
  },
  {
    name: 'Bank Account',
    Form: BankAccountForm,
  },
];

const Payments: FC<{}> = () => {
  return (
    <>
      <Head>
        <title>Payments | Locknest</title>
      </Head>
      <MainLayout itemsList={itemsList} />
    </>
  );
};

export default Payments;
