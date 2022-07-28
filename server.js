const express = require('express');
const app = express(); 
const { books } = require('./data/books.json')

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

// Router for filtered results
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

app.listen(3001, () => {
    console.log("Server now listening on 3001"); 
})