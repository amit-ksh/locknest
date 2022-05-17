import MainLayout from '../components/MainLayout';
import PasswordFrom from '../components/PasswordForm';

const itemsList = [
  {
    name: 'Password',
    Form: PasswordFrom,
  },
];

const Password = () => {
  return <MainLayout itemsList={itemsList} />;
};

export default Password;
