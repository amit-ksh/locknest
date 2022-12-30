import { NextApiRequest, NextApiResponse } from 'next';
import { validateRoute } from '../../../lib/auth';
import prisma from '../../../lib/prisma';

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user) => {
    const { data, type } = req.body;
    let id = data.id || -999999; // this id never exist in DB

    // removing the `id` attribute from `data` object
    // because `data` is used for updating the entry in the DB
    // and if `data` contains the `id` then Prisma will raise an error
    delete data.id;

    let entry;
    try {
      entry = await prisma[type].upsert({
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

      res.json({ id: entry.id });
    } catch (e) {
      console.log(e);

      res.status(500);
      res.json({ error: e.meta });
      return;
    }
  }
);
