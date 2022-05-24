import { NextApiRequest, NextApiResponse } from 'next';
import { validateRoute } from '../../../lib/auth';
import prisma from '../../../lib/prisma';

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user) => {
    const { data, type } = req.body;
    let id = data.id || -999999; // this id never exist in DB

    delete data.id;

    try {
      id = await prisma[type].upsert({
        where: {
          id,
        },
        update: {
          ...data,
          user: {
            connect: { id: user.id },
          },
        },
        create: {
          ...data,
          user: {
            connect: { id: user.id },
          },
        },
      });

      res.json({ id });
    } catch (e) {
      console.log(e);

      res.status(500);
      res.json({ error: e.meta });
      return;
    }
  }
);
