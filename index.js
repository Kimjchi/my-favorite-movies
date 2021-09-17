const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const movies = [
    {
      title: 'Dunes',
      director: 'Denis Villeneuve',
    },
    {
      title: 'Blade Runner',
      director: 'Ridley Scott',
    },
  ];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves movies from the "movies" array above.
const resolvers = {
    Query: {
      movies: () => movies,
    },
  };
  
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});  