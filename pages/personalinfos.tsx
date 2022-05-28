import MainLayout from '../components/MainLayout';
import AddressForm from '../components/AddressForm';
import EmailForm from '../components/EmailForm';
import { FC } from 'react';

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

const PersonalInfo: FC<{}> = () => {
  return <MainLayout itemsList={itemsList} />;
};

export default PersonalInfo;
