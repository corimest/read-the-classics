const seedComments = require('./comment-seeds');
const seedBook = require('./book-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');

  await seedUsers();
  console.log('--------------');

  await seedBook();
  console.log('--------------');
  
  await seedComments();
  console.log('--------------');



  process.exit(0);
};

seedAll();