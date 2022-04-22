import { NextApiRequest, NextApiResponse } from 'next';
import { validateRoute } from '../../lib/auth';
import prisma from '../../lib/prisma';

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user) => {
    const { name, url, username, password, notes } = req.body;

    try {
      await prisma.password.create({
        data: {
          name,
          username,
          password,
          url,
          notes,
          user: {
            connect: { id: user.id },
          },
        },
      });

      res.json({ success: true });
    } catch (e) {
      res.status(500);
      res.json({ error: { message: 'Password not saved.' } });
      return;
    }
  }
);
