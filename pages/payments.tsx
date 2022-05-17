import MainLayout from '../components/MainLayout';
import PaymentCardForm from '../components/PaymentCardForm';
import BankAccountForm from '../components/BankAccountForm';

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

const Payments = () => {
  return <MainLayout itemsList={itemsList} />;
};

export default Payments;
