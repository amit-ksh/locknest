import MainLayout from '../components/MainLayout';
import IDCardForm from '../components/IDCardForm';

const navItems = {
  name: 'ID Card',
  Form: IDCardForm,
};

const IDCard = () => {
  return <MainLayout navItems={navItems} />;
};

export default IDCard;
