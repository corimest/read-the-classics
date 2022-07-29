DROP DATABASE if exists classics_with_cats; 
CREATE DATABASE classics_with_cats; 
USE classics_with_cats; 

CREATE TABLE books (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    title VARCHAR(50) NOT NULL, 
    author VARCHAR(50) NOT NULL, 
    genre VARCHAR(30) NOT NULL   
); 