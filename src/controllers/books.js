const Book = require('../modules/library');


const getBooks = (req, res) => {
  return Book.find({})
    .then(books => res.status(200).send(books))
};


const getBook = (req, res) => {
  const {id} = req.params;
  return Book.findById(id)
    .then((book) => {
      res.status(200).send(book);
    })
};


const updateBook = (req, res, next) => {
    const {id} = req.params;
    Book.findByIdAndUpdate(id, {...req.body })
        .then((book) => {
            res.status(200).send(book);
        }).catch((e) => {
        res.status(500);
    });
}

const deleteBook = (req, res, next) => {
    const {id} = req.params;
    User.deleteOne({"_id": id})
        .then((dbResponse) => {
            res.status(200).send(dbResponse);
        }).catch((e) => {
        res.status(500);
    });
}

module.exports = {
    getBooks,
    getBook,
  updateBook,
  deleteBook
};