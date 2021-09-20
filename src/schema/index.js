const { gql } = require('apollo-server');

const userSchema = require('./user');
const movieSchema = require('./movie');

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

module.exports = [linkSchema, userSchema, movieSchema];