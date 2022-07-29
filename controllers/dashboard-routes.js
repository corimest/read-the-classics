const router = require('express').Router();
const sequelize = require('../config/connection');
const { Book, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// gets all books posted by user that is currently logged in
router.get('/', withAuth, (req, res) => {
    console.log(req.session.user_id)
    Book.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'title',
        'author',
        'like',
        'category',
        'image_url'
    ],
    order: [['created_at', 'DESC']], 
    include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'user_id', 'book_id'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
    ]
  })
  .then(dbPostData => {
    const books = dbPostData.map(book => book.get({ plain: true }));
    res.render('dashboard', { books, loggedIn: true });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

});

// add new book
router.get('/new', withAuth, (req,res) => {
  res.render('add-post', {loggedIn: true});
})

// when clicking on edit post, will be redirected to this page
router.get('/edit/:id', withAuth, (req, res) => {
    Book.findByPk(req.params.id, {
        attributes: [
            'id',
            'title',
            'author',
            'like',
            'category',
            'image_url'
        ],
        include: [
        {
            model: User,
            attributes: ['username']
        }
        ]}
    )
        .then(dbPostData => {
        const book = dbPostData.get({ plain: true });

        res.render('edit-book', {
        book,
        loggedIn: true
        });

        })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
})

module.exports = router;