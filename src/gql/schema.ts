export const typeDefs = `#graphql
  type Pool {
    id: ID!
    userId: Int!
    month: Float!
    isComplite: Boolean!
  }

  type Task {
    id: ID!
    poolId: Int!
    title: String!
    startDate: Float
    endDate: Float
  }

  type Query {
    getPool: [Pool]!
    getTasks(poolId: Int!): [Task]!
  }

  type Mutation {
    createPool(month: Float): Pool!
    deletePool(poolId: Int!): Pool!
    updatePool(poolId: Int!, month: Float, status: Boolean): Pool!

    createTask(poolId: Int!, title: String!, startDate: Float, endDate: Float): Task!
    deleteTask(taskId: Int!): Task!
    updateTask(taskId: Int!, title: String, startDate: Float, endDate: Float): Task!
  }
`;
