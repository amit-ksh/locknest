import { NextApiRequest, NextApiResponse } from 'next';
import { validateRoute } from '../../../lib/auth';
import prisma from '../../../lib/prisma';

const itemNames = {
  password: 'passwords',
  secureNote: 'secureNotes',
  paymentCard: 'paymentCards',
  bankAccount: 'bankAccounts',
  email: 'emails',
  address: 'addresses',
  idCard: 'idCards',
};

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user) => {
    const items = {};

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

    res.json(items);
  }
);
