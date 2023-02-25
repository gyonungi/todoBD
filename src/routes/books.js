const {getBooks, getBook, updateBook, deleteBook} = require('../controllers/books')

app.get('/books', getBooks);
app.get('/books/:id', getBook);
app.patch('/books/:id', updateBook);
app.delete('/books/:id', deleteBook);