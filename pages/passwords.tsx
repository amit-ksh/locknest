import { FC } from 'react';
import MainLayout from '../components/MainLayout';
import PasswordFrom from '../components/PasswordForm';
import Head from 'next/head';

const itemsList = [
  {
    name: 'Password',
    Form: PasswordFrom,
  },
];

const Password: FC<{}> = () => {
  return (
    <>
      <Head>
        <title>Password | Locknest</title>
      </Head>
      <MainLayout itemsList={itemsList} />
    </>
  );
};

export default Password;
