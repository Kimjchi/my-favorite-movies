const { gql } = require('apollo-server-express'); 

module.exports = gql`
  extend type Query {
    movies: [Movie]!
    movie(id: ID!): Movie
  }
 
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
`;