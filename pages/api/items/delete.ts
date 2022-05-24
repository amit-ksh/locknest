import { NextApiRequest, NextApiResponse } from 'next';
import { validateRoute } from '../../../lib/auth';
import prisma from '../../../lib/prisma';

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user) => {
    const { data, type } = req.body;
    const id = data.id || -999999; // this id never exist in DB

    delete data.id;

    try {
      const item = await prisma[type].delete({
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
