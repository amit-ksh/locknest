import prisma from './prisma';

const getItems = async (id, tableName) => {
  return await prisma[tableName].findMany({
    where: {
      userId: id,
    },
    orderBy: {
      name: 'asc',
    },
  });
};

export default getItems;
