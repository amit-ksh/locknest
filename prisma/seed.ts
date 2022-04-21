import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const run = async () => {
  const salt = bcrypt.genSaltSync();
  const user = await prisma.user.upsert({
    where: { email: 'user@test.com' },
    update: {},
    create: {
      email: 'user@test.com',
      password: bcrypt.hashSync('password', salt),
    },
  });

  const passwords = await Promise.all(
    new Array(10).fill(1).map((_, i) => {
      return prisma.password.create({
        data: {
          name: `Test#${i + 1}`,
          username: 'user@test.com',
          password: 'password',
          url: 'google.com',
          notes: `Notes #${i + 1}`,
          user: {
            connect: { id: user.id },
          },
        },
      });
    })
  );
};

run()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
