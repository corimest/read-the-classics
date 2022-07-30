const router = require('express').Router();
const { Book, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// get all books
router.get('/', (req, res) => {
  Book.findAll({
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
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one book
router.get('/:id', (req, res) => {
  Book.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'author',
      'summary',
      'category',
      'image_url'
    ],
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
      if (!dbPostData) {
        res.status(404).json({ message: 'No book found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get all books by category
router.get('/:category', (req, res) => {
  Book.findAll({
    where: {
      category: req.params.category
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
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create a book
router.post('/', withAuth, (req, res) => {
  Book.create({
    title: req.body.title,
    author: req.body.author,
    summary: req.body.summary,
    category: req.body.category,
    image_url: req.body.image_url,
    user_id: req.session.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update by user_id
router.put('/:id', withAuth, (req, res) => {
  Book.update(req.body,
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No book found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete by user_id
router.delete('/:id', withAuth, (req, res) => {
  Book.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No book found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;