import MainLayout from '../components/MainLayout';
import IDCardForm from '../components/IDCardForm';
import { FC } from 'react';

const itemsList = [
  {
    name: 'ID Card',
    Form: IDCardForm,
  },
];

const IDCard: FC<{}> = () => {
  return <MainLayout itemsList={itemsList} />;
};

export default IDCard;
