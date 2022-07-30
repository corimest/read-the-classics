const router = require('express').Router();
const { Op } = require('sequelize');
const { Book, User, Comment } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session)
    Book.findAll({
        where: {
          id: {
            [Op.between]: [1,6]
          }
        },
        attributes: [
            'id',
            'title',
            'author',
            'summary',
            'category',
            'image_url'
        ],
        order: [['created_at', 'DESC']], 
        include: [
            {
              model: User,
              attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
          const books = dbPostData.map(book => book.get({ plain: true }));
          res.render('homepage', {
            books,
            loggedIn: req.session.loggedIn
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

// find all books
router.get('/books', (req, res) => {
  console.log(req.session)
  Book.findAll({
      attributes: [
          'id',
          'title',
          'category',
          'image_url'
      ],
      order: [['created_at', 'DESC']], 
      include: [
          {
            model: User,
            attributes: ['username']
          }
      ]
  })
      .then(dbPostData => {
        const books = dbPostData.map(book => book.get({ plain: true }));
        res.render('category', {
          books,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// get single post
router.get('/books/:id', (req,res) => {
  Book.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'category',
        'summary',
        'image_url',
        'created_at',
        'author'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'user_id', 'book_id', 'created_at'],
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
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      const book = dbPostData.get({ plain: true });
      res.render('single-book', {
        book,
        loggedIn: req.session.loggedIn
      });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
})

// get books by category
router.get('/books/category/:category', (req, res) => {
  console.log(req.params.category)
  Book.findAll({
      where: {
        category: req.params.category
      },
      attributes: [
          'id',
          'title',
          'category',
          'image_url'
      ],
      order: [['created_at', 'DESC']], 
      include: [
          {
            model: User,
            attributes: ['username']
          }
      ]
  })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this category' });
          return;
        }
        const books = dbPostData.map(book => book.get({ plain: true }));
        res.render('category', {
          books,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

//login / signup page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login-page');
});

module.exports = router;