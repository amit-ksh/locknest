import MainLayout from '../components/MainLayout';
import AddressForm from '../components/AddressForm';
import EmailForm from '../components/EmailForm';

const navItems = [
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
  return <MainLayout navItems={navItems} />;
};

export default PersonalInfo;
