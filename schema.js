const { gql } = require('apollo-server');

const typeDefs = gql`
  # Your schema will go here

  # This "Movie" type defines the queryable fields for every movie in our data source.
  type Movie {
    id: ID!
    title: String
    director: Director
    year: Int
  }

  # An author has a name and a list of books
  type Director {
    id: ID!
    name: String
    movies: [Movie]
  }

  type User {
    id: ID!
    username: String!
    email: String!
    favoriteMovies: [Movie]!
    token: String
  }

  type Query {
    movies: [Movie]!
    movie(id: ID!): Movie
    me: User
    user(id: ID!): User
  }

  type Mutation {
    removeFavoriteMovie(movieId: ID!): UserUpdateResponse!
    addFavoriteMovie(movieId: ID!): UserUpdateResponse!
    login(email: String): User
  }

  type UserUpdateResponse {
    success: Boolean!
    message: String
    movies: [Movie]
  }
`;

module.exports = typeDefs;