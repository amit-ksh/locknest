import MainLayout from '../components/MainLayout';
import PaymentCardForm from '../components/PaymentCardForm';
import BankAccountForm from '../components/BankAccountForm';

const navItems = [
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
  return <MainLayout navItems={navItems} />;
};

export default Payments;
