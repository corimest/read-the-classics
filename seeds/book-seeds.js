const { Book } = require('../models');

const bookdata = [
  {
    title: 'Pride and Prejudice', 
    author: 'Jane Austen',
    category: 'Fiction',
    image_url: 'https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg',
    user_id: 2
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Bronte',
    category: 'Fiction',
    image_url: 'https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781439191187_9781439191187_hr.jpg',
    user_id: 3
  },
  {
    title: 'Tom Sawyer',
    author: 'Mark Twain',
    category: 'Fiction',
    image_url: 'https://www.memoriapress.com/wp-content/uploads/Adventures-of-Tom-Sawer-1.jpg',
    user_id: 1
  },
  {
    title: 'Harry Potter',
    author: 'JK Rowling',
    category: 'Fiction',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/81m1s4wIPML.jpg',
    user_id: 6
  },
  {
    title: 'Hunger Games',
    author: 'Suzanne Collins',
    category: 'Fiction',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/614SwlZNtJL.jpg',
    user_id: 4
  },
  {
    title: 'We Are What We Eat: A Slow Food Manifesto',
    author: 'Alice Waters',
    category: 'Nonfiction',
    image_url: 'https://s26162.pcdn.co/wp-content/uploads/2021/05/51tCjgfzWBL-199x300.jpg',
    user_id: 7
  },
  {
    title: 'How the Word Is Passed: A Reckoning with the History of Slavery Across America',
    author: 'Clint Smith',
    category: 'Nonfiction',
    image_url: 'https://s26162.pcdn.co/wp-content/uploads/2021/05/9780316492935-194x300.jpg',
    user_id: 8
  },
  {
    title: 'Then She Was Gone: A Novel',
    author: 'Lisa Jewell',
    category: 'Drama',
    image_url: 'https://www.adazing.com/wp-content/uploads/2019/03/51ompznRZKL._SX320_BO1204203200_.jpg',
    user_id: 5
  },
  {
    title: 'The Wilderness',
    author: 'Sandra Lim',
    category: 'Poetry',
    image_url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1617290526-41fPYv4IolL.jpg?crop=1xw:0.999xh;center,top&resize=768:*',
    user_id: 5
  },
  {
    title: 'Before We Were Yours',
    author: 'Lisa Wingate',
    category: 'Drama',
    image_url: 'https://www.adazing.com/wp-content/uploads/2019/03/51iAx7x3HLL.jpg',
    user_id: 5
  },
  {
    title: 'Soft Science',
    author: 'Franny Choi',
    category: 'Poetry',
    image_url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1555343862-51M-w5S0J9L.jpg?crop=1xw:0.999xh;center,top&resize=768:*',
    user_id: 5
  },
  {
    title: 'Norse Mythology',
    author: 'Matt Clayton',
    category: 'Folklore',
    image_url: 'https://m.media-amazon.com/images/I/51R-cW5DPTL.jpg',
    user_id: 5
  }
  {
    title: 'Electric Eden',
    author: 'Rob Young',
    category: 'Folklore',
    image_url: 'https://m.media-amazon.com/images/I/51aJ9uLM2IL.jpg',
  }
];

const seedBook = () => Book.bulkCreate(bookdata);

module.exports = seedBook;