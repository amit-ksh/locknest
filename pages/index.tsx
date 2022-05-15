import MainLayout from '../components/MainLayout';
import PasswordFrom from '../components/PasswordForm';
import SecureNotesForm from '../components/SecureNotesForm';
import PaymentCardForm from '../components/PaymentCardForm';
import BankAccountForm from '../components/BankAccountForm';
import AddressForm from '../components/AddressForm';
import EmailForm from '../components/EmailForm';
import IDCardForm from '../components/IDCardForm';

const addItemsList = [
  {
    name: 'Password',
    Form: PasswordFrom,
  },
  {
    name: 'Secure Notes',
    Form: SecureNotesForm,
  },
  {
    name: 'Payment card',
    Form: PaymentCardForm,
  },
  {
    name: 'Bank Account',
    Form: BankAccountForm,
  },
  {
    name: 'Address',
    Form: AddressForm,
  },
  {
    name: 'Email',
    Form: EmailForm,
  },
  {
    name: 'ID Card',
    Form: IDCardForm,
  },
];

const Home = () => {
  return <MainLayout addItemsList={addItemsList} />;
};

export default Home;
