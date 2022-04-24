import MainLayout from '../components/MainLayout';
import PasswordFrom from '../components/PasswordForm';
import SecureNotesForm from '../components/SecureNotesForm';
import PaymentCardForm from '../components/PaymentCardForm';
import BankAccountForm from '../components/BankAccountForm';
import AddressForm from '../components/AddressForm';
import EmailForm from '../components/EmailForm';
import IDCardForm from '../components/IDCardForm';

const menuItems = {
  name: 'ID Card',
  Form: IDCardForm,
};

const IDCard = () => {
  return <MainLayout menuItems={menuItems} />;
};

export default IDCard;
