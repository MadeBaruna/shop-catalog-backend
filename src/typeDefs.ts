import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Category {
    id: ID!
    name: String!
    pictureUrl: String!
    order: Int!  
  }

  type Picture {
    id: ID!
    pictureUrl: String!
  }

  type Product {
    id: ID!
    name: String!
    pictures: [Picture!]!
    size: String!
    price: Float!
    purchaseCount: Int!
    material: String!
    color: String!
    sizeGuide: String
    detail: String
    createdAt: String!
  }
  
  type Query {
    categories: [Category!]!
    products(first: Int, after: String, category: String, priceRange: Int): [Product!]!
    product(id: String!): Product!
  }
`;
