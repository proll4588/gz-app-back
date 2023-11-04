export const typeDefs = `#graphql
  type Pool {
    id: ID!
    userId: Int!
    month: Float!
    isComplite: Boolean!
  }

  type Query {
    getPool: [Pool]!
  }

  type Mutation {
    createPool(month: Float): Pool!
    deletePool(poolId: Int!): Pool!
    updatePool(poolId: Int!, month: Float, status: Boolean): Pool!
  }
`;
