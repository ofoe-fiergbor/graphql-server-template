const { gql } = require("apollo-server");

const typeDefs = gql`
  input RegisterInput {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }
  type User {
    id: ID!
    username: String!
    email: String!
    createdAt: String!
    token: String!
  }
  type Query {
    getUser: String!
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(email: String!, password: String!): User!
  }
`;

module.exports = typeDefs;
