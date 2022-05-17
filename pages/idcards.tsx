import MainLayout from '../components/MainLayout';
import IDCardForm from '../components/IDCardForm';

const itemsList = [
  {
    name: 'ID Card',
    Form: IDCardForm,
  },
];

const IDCard = () => {
  return <MainLayout itemsList={itemsList} />;
};

export default IDCard;
