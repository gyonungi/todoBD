const router = require('express').Router();


router.get('/', getBooks);
router.get('/:id', getBook);
router.patch('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = routerBooks;