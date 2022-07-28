const express = require('express');
const app = express(); 
const { books } = require('./data/books.json')
const fs = require('fs'); 
const path = require('path'); 

const PORT = process.env.PORT || 3001;

//middleware
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

//query function
function filterByQuery(query, booksArray) {
    let keywordsArray = []; 
    let filteredResults = booksArray; 
    if (query.keywords){
        if(typeof query.keywords === 'string') {
            keywordsArray = [query.keywords]; 
        } else { 
            keywordsArray = query.keywords; 
        }
        console.log(keywordsArray);
        keywordsArray.forEach(word => {
            filteredResults = filteredResults.filter(
                book => book.keywords.indexOf(word) !== -1
            );
        });
    }
    if (query.author) {
        filteredResults = filteredResults.filter(book => book.author === query.author); 
    }
    if (query.title) {
        filteredResults = filteredResults.filter(book => book.title === query.title); 
    }
    return filteredResults; 
}

//Find By ID function
function findById(id, booksArray){
    const result = booksArray.filter(book => book.id === id)[0]; 
    return result; 
}

//Create New Book function
function createNewBook(body, booksArray) {
    const book = body; 
    booksArray.push(book); 
    fs.writeFileSync(
        path.join(__dirname, './data/books.json'), 
        JSON.stringify({ books: booksArray}, null, 2)
    );
    return book; 
}

//Validate User Book Entry
function validateBook(book) {
    if (!book.title || typeof book.title !== 'string') {
        return false;
    }
    if (!book.author || typeof book.author !== 'string') {
        return false;
    }
    if (!book.keywords || !Array.isArray(book.keywords)) {
        return false;
    }
    return true;
}

// Route for filtered results
app.get ('/api/books', (req, res) => {
    let results = books; 
    if (req.query) {
        results = filterByQuery(req.query, results); 
    }
    res.json(results); 
}); 

//Route to Get all books
app.get ('/api/books', (req, res) => {
    res.send(books); 
}); 

//Route to Get specific book
app.get('/api/books/:id', (req, res) => {
    const result = findById(req.params.id, books); 
    if (result) {
        res.json(result); 
    } else {
        res.send(404); 
    }
}); 

//Post Route
app.post('/api/books', (req, res) => {
    //set id on what the next index of the array 
    req.body.id = books.length.toString(); 

    if (!validateBook(req.body)) {
        res.status(400).send("This book is not properly formatted, so the cats can't read it. Please try again."); 
    } else {

    //add new book to JSON and books array 
    const book = createNewBook(req.body, books); 

    res.json(book); 
    }
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });