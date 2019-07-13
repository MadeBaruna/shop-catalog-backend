import { prisma } from '../generated/prisma-client';

export const resolvers = {
  Query: {
    categories: async () => {
      const categories = await prisma.categories({
        orderBy: 'order_ASC'
      });
      return categories;
    },
    products: async (parent, { first, after, category, priceRange }) => {
      const products = await prisma.products({
        first,
        after,
        where: {
          category: {
            id: category
          },
          price_lt: priceRange === 0 ? 150000 : undefined,
          price_gte: priceRange === 1 ? 150000 : undefined
        }
      });
      return products;
    },
    product: async (parent, { id }) => {
      return await prisma.product({ id });
    }
  },
  Product: {
    pictures(parent) {
      return prisma.product({ id: parent.id }).pictures();
    }
  }
};
