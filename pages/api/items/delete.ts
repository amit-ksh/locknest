import { NextApiRequest, NextApiResponse } from 'next';
import { validateRoute } from '../../../lib/auth';
import prisma from '../../../lib/prisma';

const itemNames = {
  password: 'password',
  securenotes: 'secureNotes',
  paymentcard: 'paymentCard',
  bankaccount: 'bankAccount',
  email: 'email',
  address: 'address',
  idcard: 'idCard',
};

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user) => {
    const { data, type } = req.body;
    const id = data.id || -999999; // this id never exist in DB
    
    delete data.id

    const name = itemNames[type.toLowerCase()];
    try {
      const item = await prisma[name].delete({
        where: {
          id,
        },
      });

      res.json({ id: item.id });
    } catch (e) {
      console.log(e);

      res.status(500);
      res.json({ error: e.meta });
      return;
    }
  }
);
