const express = require('express');
const router = express.Router();

const { books } = require('../models');

router.post('/', async (req, res, next) => {
  try {
    const { body } = req;
    const book = await books.create(body);
    return res.status(201).send(book);
  } catch (error) {
    return next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await books.findByPk(id);
    return res.status(200).send(book);
  } catch (error) {
    return next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const { offset=0, limit=10 } = req.query;
    const meta = await books.findAndCountAll({ offset, limit});
    return res.status(200).send({ numberBooks: meta.count, books: meta.rows});
  } catch (error) {
    return next(error);
  }
});


module.exports = router;
