import MainLayout from '../components/MainLayout';
import PasswordFrom from '../components/PasswordForm';

const addItemsList = {
  name: 'Password',
  Form: PasswordFrom,
};

const Password = () => {
  return <MainLayout addItemsList={addItemsList} />;
};

export default Password;
