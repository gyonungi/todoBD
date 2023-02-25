
const router = require('express').Router();
const userRouter = require('./users');
const booksRouter = require('./books')

router.use('/users', userRouter);
router.use('/books',userRouter);

module.exports = router;