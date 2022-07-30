// import all the models
const User = require('./User');
const Book = require('./Book');
const Comment = require('./Comment');

User.hasMany(Book, {
	foreignKey: 'user_id'
});

Book.belongsTo(User, {
	foreignKey: 'user_id',
	onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
	foreignKey: 'user_id',
	onDelete: 'SET NULL'
});

Comment.belongsTo(Book, {
	foreignKey: 'book_id',
	onDelete: 'SET NULL'
});

User.hasMany(Comment, {
	foreignKey: 'user_id'
});

Book.hasMany(Comment, {
	foreignKey: 'book_id'
});

module.exports = { User, Book, Comment };