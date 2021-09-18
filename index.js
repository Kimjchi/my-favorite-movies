const cors = require('cors');
const express = require('express');
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { users, movies } = require('./models');
const resolvers = require('./resolvers');

require('dotenv').config();

const app = express();

app.use(cors());

const me = users[1];
  
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: {
        models: {movies, users},
        me: users[1],
    },
 });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});  