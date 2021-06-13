const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const { MONGO_DB } = require("./src/config");
const typeDefs = require("./src/graphql/typeDefs");
const resolvers = require("./src/graphql/resolvers");

const PORT = process.env.PORT || 5000;

const server = new ApolloServer({
  cors: true,
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

mongoose
  .connect(MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    return server.listen({ port: PORT });
  })
  .then((res) => console.log(`server running at ${res.url}`))
  .catch((err) => console.log(err));
