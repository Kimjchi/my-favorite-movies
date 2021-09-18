const { gql } = require('apollo-server-express');
 
module.exports = gql`
  extend type Query {
    users: [User!]
    user(id: ID!): User
    me: User
  }

  extend type Mutation {
    removeFavoriteMovie(movieId: ID!): UserUpdateResponse!
    addFavoriteMovie(movieId: ID!): UserUpdateResponse!
    login(email: String): User
  }

  type UserUpdateResponse {
    success: Boolean!
    message: String
    movies: [Movie]
  }
 
  type User {
    id: ID!
    username: String!
    email: String!
    favoriteMovies: [Movie]!
    token: String
  }
`;