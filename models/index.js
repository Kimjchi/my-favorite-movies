const Sequelize = require('sequelize');
 
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  },
);

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

 
module.exports = { sequelize, movies, directors, users };