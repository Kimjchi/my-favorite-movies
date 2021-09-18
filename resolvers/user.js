module.exports = {
    Query: {
      users: (parent, args, { models }) => {
        return models.users
      },
      user: (parent, { id }, { models }) => {
        return models.users[id];
      },
      me: (parent, args, { me }) => {
        return me;
      },
    },
   
    User: {
        favoriteMovies: (user, args, { models }) => {
            return user.favoriteMovies.map(id => {
                return models.movies.find(movie => movie.id === id);
            }, {})
        }
    },

    Mutation: {
        addFavoriteMovie: (parent, { movieId }, { me, models }) => {
          const user = {
              ...me,
                favoriteMovies: [...me.favoriteMovies, movieId]
          };

          models.users[me.id] = user;
     
          return {
              success: true,
              message: "Favorite Movie added!",
              movies: user.favoriteMovies 
          };
        },
    },
  };