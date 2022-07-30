const { Book } = require('../models');

const bookdata = [
  {
    title: 'Pride and Prejudice', 
    author: 'Jane Austen',
    category: 'Fiction',
    summary: 'Pride and Prejudice is a novel of modern romantic fiction, set in London in the early 19th century. It is considered one of the most important novels of the 19th century, and is one of the best-known novels of the English language. It has been called "a classic of the English genre" and is often called "the best novel ever written".',
    image_url: 'https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg',
    user_id: 2
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Bronte',
    category: 'Fiction',
    surmary: 'Jane Eyre is a great novel about a young orphan who is raised by a family of three. The story is about the orphan\'s life and the family\'s struggles to survive the harsh environment of the orphanage. The novel is set in the fictional town of Shire in the North West of England, and is written by Charlotte Bronte.',
    image_url: 'https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781439191187_9781439191187_hr.jpg',
    user_id: 3
  },
  {
    title: 'Tom Sawyer',
    author: 'Mark Twain',
    category: 'Fiction',
    surmary: 'Tom Sawyer is a very great novel about fictional character Tom Sawyer. The novel is set in the fictional town of Twain, and is written by Mark Twain.',
    image_url: 'https://www.memoriapress.com/wp-content/uploads/Adventures-of-Tom-Sawer-1.jpg',
    user_id: 1
  },
  {
    title: 'Harry Potter',
    author: 'JK Rowling',
    category: 'Fiction',
    surmary: 'Harry Potter is a fantasy novel series written by British author J. K. Rowling. The series chronicles the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry, a private school for wizards, which is located in the United Kingdom. The novel primarily takes place during the Harry Potter series, but also features other works by the author, including the books Harry Potter and the Goblet of Fire, the Fantastic Beasts and the Half-Blood Prince, as well as the stand-alone novel The Casual Vacancy.',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/81m1s4wIPML.jpg',
    user_id: 6
  },
  {
    title: 'Hunger Games',
    author: 'Suzanne Collins',
    category: 'Fiction',
    surmary: 'Hunger Games is a dystopian novel written by American author Suzanne Collins. It is a story of the death of a nation, in which 12 out of 15 children of a nation are forced to participate in a televised killing game. The 12 chosen are chosen at random by the government, who then kills them in a televised manner. The novel is a collection of short stories, each of which is a story of a single child\'s life.',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/614SwlZNtJL.jpg',
    user_id: 4
  },
  {
    title: 'We Are What We Eat: A Slow Food Manifesto',
    author: 'Alice Waters',
    category: 'Nonfiction',
    surmary: 'We Are What We Eat is a book about the slow food movement, and the ways in which it has impacted the lives of people around the world. It is a collection of essays by Alice Waters, a writer of the slow food movement, and a writer of the slow food movement.',
    image_url: 'https://s26162.pcdn.co/wp-content/uploads/2021/05/51tCjgfzWBL-199x300.jpg',
    user_id: 7
  },
  {
    title: 'How the Word Is Passed: A Reckoning with the History of Slavery Across America',
    author: 'Clint Smith',
    category: 'Nonfiction',
    surmary: 'it is a very great books',
    image_url: 'https://s26162.pcdn.co/wp-content/uploads/2021/05/9780316492935-194x300.jpg',
    user_id: 8
  },
  {
    title: 'Then She Was Gone: A Novel',
    author: 'Lisa Jewell',
    category: 'Drama',
    surmary: 'Then She Was Gone is a novel by Lisa Jewell. It is a story about the life of a nationally televised television host, Lisa Jewell, who is forced to leave her job to pursue a career in the performing arts. The novel is set in the United States, and is written by Lisa Jewell.',
    image_url: 'https://www.adazing.com/wp-content/uploads/2019/03/51ompznRZKL._SX320_BO1204203200_.jpg',
    user_id: 5
  },
  {
    title: 'The Wilderness',
    author: 'Sandra Lim',
    category: 'Poetry',
    surmary: 'The Wilderness is a poem by Sandra Lim. It is a poem about the wilderness, and the people who live there. The poem is set in the United States, and is written by Sandra Lim.',
    image_url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1617290526-41fPYv4IolL.jpg?crop=1xw:0.999xh;center,top&resize=768:*',
    user_id: 5
  },
  {
    title: 'Before We Were Yours',
    author: 'Lisa Wingate',
    category: 'Drama',
    surmary: 'Before We Were Yours is a novel by Lisa Wingate. It is a story about the life of a Young American, Lisa Wingate, who is forced to leave her job to pursue a career in the performing arts. The novel is set in the United States, and is written by Lisa Wingate.',
    image_url: 'https://www.adazing.com/wp-content/uploads/2019/03/51iAx7x3HLL.jpg',
    user_id: 5
  },
  {
    title: 'Soft Science',
    author: 'Franny Choi',
    category: 'Poetry',
    surmary: 'Soft Science is a poem by Franny Choi. It is a poem about the soft science, and the people who live there. The poem is set in the United States, and is written by Franny Choi.',
    image_url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1555343862-51M-w5S0J9L.jpg?crop=1xw:0.999xh;center,top&resize=768:*',
    user_id: 5
  },
  {
    title: 'Norse Mythology',
    author: 'Matt Clayton',
    category: 'Folklore',
    surmary: 'Norse Mythology is a book by Matt Clayton. It is a book about the Norse mythology, and the people who live there. The book is set in the United States, and is written by Matt Clayton.',
    image_url: 'https://m.media-amazon.com/images/I/51R-cW5DPTL.jpg',
    user_id: 5
  },
  {
    title: 'Electric Eden',
    author: 'Rob Young',
    category: 'Folklore',
    surmary: 'Electric Eden is a book by Rob Young. It is a book about the electric eden, and the people who live there. The book is set in the United States, and is written by Rob Young.',
    image_url: 'https://m.media-amazon.com/images/I/51aJ9uLM2IL.jpg',
  }
];

const seedBook = () => Book.bulkCreate(bookdata);

module.exports = seedBook;