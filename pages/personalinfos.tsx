import MainLayout from '../components/MainLayout';
import AddressForm from '../components/AddressForm';
import EmailForm from '../components/EmailForm';

const itemsList = [
  {
    name: 'Address',
    Form: AddressForm,
  },
  {
    name: 'Email',
    Form: EmailForm,
  },
];

const PersonalInfo = () => {
  return <MainLayout itemsList={itemsList} />;
};

export default PersonalInfo;
