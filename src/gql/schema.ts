export const typeDefs = `#graphql
  
  type Pool {
    id: ID!
    userId: Int!
    title: String!
    dateCreate: Float!
    dateComplite: Float
    isComplite: Boolean!
  }


  type Query {
    getPool: [Pool]!
  }


  type Mutation {
    createPool(title: String!, dateCreate: Float): Pool!
  }
`;
