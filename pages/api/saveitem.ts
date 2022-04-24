import { NextApiRequest, NextApiResponse } from 'next';
import { validateRoute } from '../../lib/auth';
import prisma from '../../lib/prisma';

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user) => {
    const { data, type } = req.body;

    try {
      await prisma[type].create({
        data: {
          ...data,
          user: {
            connect: { id: user.id },
          },
        },
      });

      res.json({ success: true });
    } catch (e) {
      console.log(e);

      res.status(500);
      res.json({ error: 'Item Not Saved' });
      return;
    }
  }
);
