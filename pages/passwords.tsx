import { FC } from 'react';
import MainLayout from '../components/MainLayout';
import PasswordFrom from '../components/PasswordForm';

const itemsList = [
  {
    name: 'Password',
    Form: PasswordFrom,
  },
];

const Password: FC<{}> = () => {
  return <MainLayout itemsList={itemsList} />;
};

export default Password;
