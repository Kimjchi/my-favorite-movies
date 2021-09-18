module.exports = {
    Query: {
        movies: (parent, args, { models }) => models.movies
      },
}