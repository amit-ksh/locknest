import MainLayout from '../components/MainLayout';
import AddressForm from '../components/AddressForm';
import EmailForm from '../components/EmailForm';

const menuItems = [
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
  return <MainLayout menuItems={menuItems} />;
};

export default PersonalInfo;
