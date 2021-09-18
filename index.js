const cors = require('cors');
const express = require('express');
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

require('dotenv').config();

const app = express();

app.use(cors());

const movies = [
    {
        id: 1,   
        title: 'Dunes',
        director: 'Denis Villeneuve',
    },
    {
        id: 2,
        title: 'Blade Runner',
        director: 'Ridley Scott',
    },
    {
        id: 3,
        title: 'Elephant Man',
        director: 'David Lynch',
    },
];

const directors = [

];

const users = {
    1: {
        id: '1',
        username: 'Robin Wieruch',
        email: 'tesst',
        favoriteMovies: [1, 2]
    },
    2: {
        id: '2',
        username: 'Dave Davids',
        email: '',
        favoriteMovies: [2]
    },
};

const me = users[1];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves movies from the "movies" array above.
const resolvers = {
    Query: {
      movies: () => movies,
      user: (parent, { id }) => {
        return users[id];
      },
      me: (parent, args, { me }) => {
        return me;
      },
    },
    User: {
        favoriteMovies: user => {
            return user.favoriteMovies.map(id => {
                return movies.find(movie => movie.id === id);
            }, {})
        }
    },
    Mutation: {
        addFavoriteMovie: (parent, { movieId }, { me }) => {
          const user = {
              ...me,
                favoriteMovies: [...me.favoriteMovies, movieId]
          };

          users[me.id] = user;
     
          return {
              success: true,
              message: "Favorite Movie added!",
              movies: user.favoriteMovies 
          };
        },
    },
  };
  
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: {
        me: users[1],
    },
 });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});  