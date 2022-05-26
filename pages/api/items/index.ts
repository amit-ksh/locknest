import { NextApiRequest, NextApiResponse } from 'next';
import { validateRoute } from '../../../lib/auth';
import prisma from '../../../lib/prisma';

/* 
  TABLE_NAME: ARRAY_NAME
*/
const itemNames = {
  password: 'passwords',
  secureNotes: 'secureNotes',
  paymentCard: 'paymentCards',
  bankAccount: 'bankAccounts',
  email: 'emails',
  address: 'addresses',
  idCard: 'idCards',
};

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user) => {
    const items = {};

    try {
      for (const name in itemNames) {
        items[itemNames[name]] = await prisma[name].findMany({
          where: {
            userId: user.id,
          },
          orderBy: {
            name: 'asc',
          },
        });
      }

      return res.json(items);
    } catch (error) {
      console.log(error);
      return res.json({ error: error.meta });
    }
  }
);
